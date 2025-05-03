import random

options = ("rock","paper","scissor","lizard","spock")

while True:
    user_choice = input("User chooses: ").lower()



    
    if user_choice not in options:
        print("Invalid value please try again")
        continue
    
    
    

    computer_Choice = random.choice(options)
    print("Computer chooses:",computer_Choice)

    if(computer_Choice == user_choice):
        print("Its a tie")
    
    
    if(computer_Choice == "Rock" and user_choice == "Scissor") or \
    (computer_Choice == "Paper" and user_choice == "Rock") or \
    (computer_Choice == "Scissor" and user_choice == "Paper") or \
    (computer_Choice == "Lizard" and user_choice == "Paper") or \
    (computer_Choice == "Spock" and user_choice == "Lizard") or \
    (computer_Choice == "Rock" and user_choice == "Lizard") or \
    (computer_Choice == "Scissor" and user_choice == "Lizard") or \
    (computer_Choice == "Spock" and user_choice == "Paper") or \
    (computer_Choice == "Spock" and user_choice == "Rock") or \
    (computer_Choice == "Scissor" and user_choice == "Spock"):
        print("Computer wins :)")
    else:
        print("You win :)")

    retry = input("Want to try our your luck again 'Yes/No' ").strip().lower()
    if retry != "yes":
        print("Thanks for playing :)")
        break
    else:
        print("Cool")
        continue