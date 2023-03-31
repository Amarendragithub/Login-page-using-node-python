import sys
import webbrowser


print(sys.argv[1])
print(sys.argv[2])

if sys.argv[1] == "amarendrasahoo787@gmail.com" and sys.argv[2] == "sanu":
    print("done")
    webbrowser.open('https://nodejs.org/en/docs')
else:
    print("error")