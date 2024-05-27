import re
import json

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

# Process values into a list of dictionaries
data = []
for value_tuple in values_list:
    # Split values considering possible commas inside quotes
    values = re.split(r",\s*(?=(?:[^']*'[^']*')*[^']*$)", value_tuple)
    values = [value.strip().strip("'").strip("NULL") if value.strip() != "NULL" else None for value in values]
    data.append(dict(zip(columns, values)))

# Save to JSON
output_file = 'output.json'
with open(output_file, 'w') as json_file:
    json.dump(data, json_file, indent=4)

print(f"Data has been successfully saved to {output_file}")
