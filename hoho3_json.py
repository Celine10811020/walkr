import os
import json

# Define the path to the hoho folder and JSON file
hoho3_path = 'hoho3'
json_file_path = 'hoho3.json'

# List all files in the hoho folder
files = os.listdir(hoho3_path)

# Filter for files that match the pattern 診所YYYYMMDD-MMDD.jpg
filtered_files = [f for f in files if f.startswith('和和3-') and f.endswith('.jpg')]

# Initialize an empty list to hold the JSON data
json_data = []

# Iterate over the filtered files and extract the necessary information
for file_name in filtered_files:
    path = os.path.join(hoho3_path, file_name)
    # Extract the start and end dates
    start_date = file_name[4:12]
    end_date = file_name[4:8] + file_name[13:17]

    # Create a dictionary with the extracted data
    file_data = {
        'path': path,
        'start': start_date,
        'end': end_date
    }

    # Append the dictionary to the JSON data list
    json_data.append(file_data)

# Write the JSON data to the file
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(json_data, json_file, ensure_ascii=False, indent=2)

print(f'Updated {json_file_path} with {len(json_data)} entries.')
