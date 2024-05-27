import pandas as pd

def csv_to_sql_insert(csv_file, table_name):
    # Read the CSV file
    try:
        df = pd.read_csv(csv_file)
    except FileNotFoundError as e:
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
    csv_file = 'your_csv_file.csv'  # Replace with your CSV file name
    table_name = 'your_table_name'  # Replace with your table name
    
    # Convert CSV to SQL INSERT queries
    queries = csv_to_sql_insert(csv_file, table_name)
    
    # Save the queries to a file
    output_file = 'output.sql'
    with open(output_file, 'w') as file:
        for query in queries:
            file.write(query + '\n')
    
    print(f"SQL INSERT queries have been saved to {output_file}")
