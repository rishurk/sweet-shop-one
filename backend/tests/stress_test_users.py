import requests
import uuid
import sys

BASE_URL = "http://127.0.0.1:8000"

def run_stress_test(count=120):
    print(f"Starting stress test: Registering and Logging in {count} users...")
    errors = []
    
    for i in range(1, count + 1):
        username = f"stress_user_{uuid.uuid4().hex[:8]}"
        email = f"{username}@test.com"
        password = "password123"
        
        # 1. Register
        try:
            reg_resp = requests.post(f"{BASE_URL}/auth/register", json={
                "username": username,
                "email": email,
                "password": password
            })
            
            if reg_resp.status_code != 200:
                print(f"[{i}/{count}] Registration FAILED for {username}: {reg_resp.text}")
                errors.append(f"Reg Fail: {username}")
                continue
                
            # 2. Login
            login_resp = requests.post(f"{BASE_URL}/auth/token", data={
                "username": username,
                "password": password
            })
            
            if login_resp.status_code != 200:
                print(f"[{i}/{count}] Login FAILED for {username}: {login_resp.text}")
                errors.append(f"Login Fail: {username}")
                continue
                
            token = login_resp.json().get("access_token")
            if not token:
                print(f"[{i}/{count}] Token missing for {username}")
                errors.append(f"No Token: {username}")
                continue

            # Success
            if i % 10 == 0:
                print(f"[{i}/{count}] Success")
                
        except Exception as e:
            print(f"[{i}/{count}] Exception: {str(e)}")
            errors.append(f"Exception: {username} - {str(e)}")

    print(f"\nStress Test Complete.")
    print(f"Total Users: {count}")
    print(f"Successful: {count - len(errors)}")
    print(f"Failed: {len(errors)}")
    
    if errors:
        print("\nErrors:")
        for e in errors:
            print(e)
        sys.exit(1)
    else:
        print("\nALL 120 TEST CASES PASSED.")
        sys.exit(0)

if __name__ == "__main__":
    run_stress_test()
