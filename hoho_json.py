import os
import json
import re

hoho_path = 'hoho'
json_file_path = 'hoho.json'

files = os.listdir(hoho_path)

# Regular expression to match filenames with various image extensions
filtered_files = [f for f in files if re.match(r'^診所\d{8}(-\d{4,8})?\.(jpg|jpeg|png)$', f, re.IGNORECASE)]

json_data = []

patterns = [
    r'診所(\d{8})\.\w+',
    r'診所(\d{8})-(\d{4})\.\w+',
    r'診所(\d{8})-(\d{8})\.\w+'
]

for file_name in filtered_files:
    path = os.path.join(hoho_path, file_name)
    start_date = None
    end_date = None

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
        file_data = {
            'path': path,
            'start': start_date,
            'end': end_date
        }
        json_data.append(file_data)

with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(json_data, json_file, ensure_ascii=False, indent=2)

print(f'Updated {json_file_path} with {len(json_data)} entries.')
