# [Dicee Toss Webpage 🎲](https://dicee-toss.vercel.app/)

This project is a fun and interactive webpage that simulates a dice roll for two players. With each refresh, the webpage randomly generates dice rolls for both players and declares the winner based on the results.

---

## Features

- **Random Dice Roll**:
  - Generates random dice numbers (1–6) for both players.
  - Displays the corresponding dice image for each roll.

- **Winner Declaration**:
  - Compares the dice rolls and announces:
    - **Player 1 Wins** if Player 1's roll is higher.
    - **Player 2 Wins** if Player 2's roll is higher.
    - **Draw!!** if both players roll the same number.

---

## How It Works

1. **Dice Roll Logic**:
   - Random numbers between 1 and 6 are generated using `Math.random()` for both players.
   - Each random number determines the dice image to display (e.g., `dice1.png` for roll 1).

2. **Dynamic Image Update**:
   - The `setAttribute` method dynamically updates the `src` attribute of the `<img>` elements to reflect the rolled dice.

3. **Winner Calculation**:
   - The dice rolls are compared, and the `<h1>` element's content is updated with the result (Player 1 wins, Player 2 wins, or Draw).

---

## Key Files

- **`dicee.html`**:
  - Structure of the webpage, including the dice images and header for displaying results.

- **`style.css`**:
  - (Optional) Styling for the webpage.

- **`index.js`**:
  - JavaScript code that implements the dice roll logic, updates the dice images, and declares the winner.

- **`images/`**:
  - Folder containing dice images (`dice1.png`, `dice2.png`, ..., `dice6.png`).

---

## Technical Details

### JavaScript Logic:

1. **Random Number Generation**:
   - The dice rolls are generated using:
     ```javascript
     Math.floor((Math.random() * 6) + 1);
     ```
   - This ensures a random number between 1 and 6.

2. **Image Update**:
   - The `setAttribute` method dynamically changes the `src` attribute of the `<img>` tags:
     ```javascript
     document.querySelectorAll("img")[0].setAttribute("src", imgSrc1);
     ```

3. **Winner Declaration**:
   - The winner is determined using `if` conditions, and the result is displayed by updating the `<h1>` element:
     ```javascript
     document.querySelector("h1").innerHTML = "Player 1 Wins";
     ```

---

Enjoy the game of luck with Dicee Toss! 🎲
