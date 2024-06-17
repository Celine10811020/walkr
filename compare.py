import os

# 設定兩個資料夾的路徑
folder_hoho = './hoho'  # 將'path_to_hoho_folder'替換為實際路徑
folder_hoho3 = './hoho3'  # 將'path_to_hoho3_folder'替換為實際路徑

# 獲取hoho資料夾中的所有檔案名稱
files_hoho = os.listdir(folder_hoho)

# 獲取hoho3資料夾中的所有檔案名稱
files_hoho3 = os.listdir(folder_hoho3)

# 提取hoho資料夾中檔案的共同後綴
common_suffixes_hoho = [file_hoho.split('診所')[-1] for file_hoho in files_hoho]

# 找出在hoho資料夾中存在但在hoho3資料夾中不存在的檔案
missing_files = []
for suffix_hoho in common_suffixes_hoho:
    matching_file_hoho3 = next((file_hoho3 for file_hoho3 in files_hoho3 if f'和和3-{suffix_hoho}' in file_hoho3), None)
    if not matching_file_hoho3:
        missing_files.append(suffix_hoho)

# 輸出結果
print(f"hoho資料夾中比hoho3資料夾少的檔案後綴：{missing_files}")
