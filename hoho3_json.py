import os
import json
import re

# Define the path to the hoho folder and JSON file
hoho3_path = 'hoho3'
json_file_path = 'hoho3.json'

# List all files in the hoho folder
files = os.listdir(hoho3_path)

# Filter for files that match the pattern 和和3-YYYYMMDD.jpg, 和和3-YYYYMMDD-MMDD.jpg, 和和3-YYYYMMDD-YYYYMMDD.jpg
filtered_files = [f for f in files if f.startswith('和和3-') and f.endswith('.jpg')]

# Initialize an empty list to hold the JSON data
json_data = []

# Define regex patterns for each filename format
patterns = [
    r'和和3-(\d{8})\.jpg',  # 和和3-YYYYMMDD.jpg
    r'和和3-(\d{8})-(\d{4})\.jpg',  # 和和3-YYYYMMDD-MMDD.jpg
    r'和和3-(\d{8})-(\d{8})\.jpg'  # 和和3-YYYYMMDD-YYYYMMDD.jpg
]

# Iterate over the filtered files and extract the necessary information
for file_name in filtered_files:
    path = os.path.join(hoho3_path, file_name)
    start_date = None
    end_date = None

    # Check which pattern the filename matches
    for pattern in patterns:
        match = re.match(pattern, file_name)
        if match:
            if len(match.groups()) == 1:
                start_date = match.group(1)
                end_date = start_date
            elif len(match.groups()) == 2:
                start_date = match.group(1)
                if len(match.group(2)) == 4:
                    end_date = start_date[:4] + match.group(2)
                else:
                    end_date = match.group(2)
            break

    if start_date and end_date:
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
