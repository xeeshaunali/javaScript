import json

# Read JSON file
with open('input.json', 'r') as json_file:
    data = json.load(json_file)

# Check if data is not empty
if not data:
    raise ValueError("JSON data is empty")

# Extract table name and column names from the first row
table_name = 'tablename'
columns = list(data[0].keys())

# Construct SQL INSERT statements
sql_inserts = []
for row in data:
    values = ','.join([f"'{value}'" if isinstance(value, str) else str(value) for value in row.values()])
    sql_inserts.append(f"INSERT INTO {table_name} ({', '.join(columns)}) VALUES ({values});")

# Save SQL INSERT statements to a file
with open('output.sql', 'w') as sql_file:
    sql_file.write('\n'.join(sql_inserts))

print("SQL data has been successfully saved to output.sql")
