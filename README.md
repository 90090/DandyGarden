# DandyGarden

## Purpose

The main goal of this extension is to help you study effectively with the pomodoro technique. The pomodoro technique lets you complete your tasks in intervals of 25 minutes of work and 5 minutes of rest called pomodoros. You continue these intervals until you finish the task you wanted to complete. After every pomodoro, you earn points which you can use to purchase plants for your garden.

## Technologies Used

We implemented this project with ReactJs, HTML, and CSS with the chrome api. 

## How to Install and Run

- Clone the repository by typing this command
```
git clone https://github.com/90090/DandyGarden.git
```
- Install all the neccessary node_module files by typing this command
```
npm install
```
- To run the application, type this command
```
npm run build
```
- Go to manage extensions on chrome
- Turn on developer mode
- Click load unpacked
- Pin the extension to your extensions
- Open your garden by clicking on the view garden button
- Open your website you would like to work on 
- Start the timer

## How to Start your Pomodoro

At the top of the screen you want to work on there will be a start button. Once you click the start button, the 25 minute countdown will start to decrease. If you leave your window, the timer will stop and you will not be able to earn points for the time you are not working. 

## How to Earn Points

Navigate to your garden by clicking on the view garden button on the extension. You must have the window always open so you can accumulate your points. If you close this window, you lose your points and will have to start your garden over. 

After every pomodoro interval, you earn 15 points. Your overall points will automatically update after each pomodoro.

## How to Buy Plants

Navigate to your garden by clicking on the view garden button on the extension. This will bring you to your garden. There you can find instructions about how to earn points and buy plants. You can also view your overall points gained. 

What type of plants can you buy?
- Pink flower which costs 20 points
- Cactus which costs 30 points
- Sunflower which costs 60 points

When you buy a plant, the plant arrives in your garden and decrements your overall points. From there, you can now rearrange your plant to anywhere in your garden.

## Future Implementations

Users can delegate tasks with different difficulty levels
- Easy: 5 points
- Intermediate: 15 points
- Difficult: 30 points

Persistance of data

Larger variety of plants/flowers for users to purchase

User can input different timer modes, for example if the user wants to work more or less time for each pomodoro

----

## Demo

Youtube Link: https://www.youtube.com/watch?v=7zWdYBp3RTA 

----

## Credits

- Ethan Ligi: https://github.com/90090 
- Renee Bogdany: https://github.com/rkb4472 
- Jaden Seaton: https://github.com/jadens12

How we learned to implement a chrome extension: 
- https://www.youtube.com/watch?v=pBPDJb_6Aps&t=3146s
