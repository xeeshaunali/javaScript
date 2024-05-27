import re
import pandas as pd
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
from reportlab.lib import colors

# Read the SQL file
with open('acc.sql', 'r') as file:
    sql_content = file.read()

# Define regular expressions to match the INSERT INTO statement and the VALUES section
insert_into_pattern = r'INSERT INTO\s+`(\w+)`\s*\((.*?)\)\s*VALUES'
values_pattern = r'VALUES\s*(\(.*?\));'

# Extract the table name and columns
table_info = re.search(insert_into_pattern, sql_content, re.DOTALL | re.IGNORECASE)
if table_info:
    table_name = table_info.group(1)
    columns = [col.strip().strip('`') for col in table_info.group(2).split(',')]
else:
    raise ValueError("INSERT INTO clause not found in the SQL file.")

# Extract the values
values_section = re.findall(values_pattern, sql_content, re.DOTALL | re.IGNORECASE)
if values_section:
    values_list = []
    for group in values_section:
        values = re.findall(r'\((.*?)\)', group, re.DOTALL)
        values_list.extend(values)
else:
    raise ValueError("VALUES clause not found in the SQL file.")

# Process values into a list of lists
data = []
for value_tuple in values_list:
    # Split values considering possible commas inside quotes
    values = re.split(r",\s*(?=(?:[^']*'[^']*')*[^']*$)", value_tuple)
    values = [value.strip().strip("'").strip("NULL") if value.strip() != "NULL" else None for value in values]
    data.append(values)

# Create a DataFrame
df = pd.DataFrame(data, columns=columns)

# Save to PDF
output_file = 'output.pdf'

# Convert DataFrame to list of lists for ReportLab
data_for_pdf = [columns] + df.values.tolist()

# Create PDF document
pdf = SimpleDocTemplate(output_file, pagesize=letter)
elements = []

# Create table
table = Table(data_for_pdf)
table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
    ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
    ('GRID', (0, 0), (-1, -1), 1, colors.black),
]))

elements.append(table)
pdf.build(elements)

print(f"Data has been successfully saved to {output_file}")
