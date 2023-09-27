import requests


print(requests.delete('http://localhost:4567/todos/3?description=TEST_UPDATE').json())