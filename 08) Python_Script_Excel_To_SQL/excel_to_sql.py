import pandas as pd

def get_sheet_names(excel_file):
    """Get the list of sheet names from the Excel file."""
    xls = pd.ExcelFile(excel_file)
    return xls.sheet_names

def excel_to_sql_insert(excel_file, sheet_name, table_name):
    # Read the Excel file
    try:
        df = pd.read_excel(excel_file, sheet_name=sheet_name)
    except ValueError as e:
        print(f"Error: {e}")
        return []
    
    # Generate SQL INSERT statements
    insert_queries = []
    for index, row in df.iterrows():
        # Get column names and values
        columns = ', '.join(df.columns)
        values = ', '.join([f"'{str(value)}'" if not pd.isna(value) else 'NULL' for value in row])
        
        # Create the INSERT query
        query = f"INSERT INTO {table_name} ({columns}) VALUES ({values});"
        insert_queries.append(query)
    
    return insert_queries

if __name__ == "__main__":
    excel_file = 'your_excel_file.xlsx'  # Replace with your file name
    table_name = 'your_table_name'  # Replace with your table name
    
    # Print available sheet names
    sheet_names = get_sheet_names(excel_file)
    print("Available sheet names:", sheet_names)
    
    # Update this to match one of the available sheet names
    sheet_name = 'Sheet1'  # Replace with the correct sheet name
    
    queries = excel_to_sql_insert(excel_file, sheet_name, table_name)
    
    # Save the queries to a file
    output_file = 'output.sql'
    with open(output_file, 'w') as file:
        for query in queries:
            file.write(query + '\n')
    
    print(f"SQL INSERT queries have been saved to {output_file}")
