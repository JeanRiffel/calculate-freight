<h1 align="center">Calculate Freight</h1>
<p>
    I want to calculate the freight with a few variables. 
    
    My goal with this project is only to understand how I can apply some clean architecture principles in a project. 
    
    This project will calculate freight.
</p>

<h2> Steps </h2>

- Place a Order    
- Adding products to a Order
- Calculate the freight of the Order

    - We can only calculate a freight when the product is inside a order.
    - Each product has a weight, height, length and width.
    - We need to decide between the volume or weight
    


<h2> Instructions </h2>
    
    npm install

<h2> Useful commands </h2>

    Whether you do not have the nvm install on your computer I recommend to install it or check the .nvmrc to find out which version of node the app is using.

    - Run the app
       - on dev mode:  npm run start:dev
       - on test mode: npm run test

<h2> Docker commands </h2>

docker run --name db-freight --rm -e POSTGRES_USER=john -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=freight -p 5432:5432 -it postgres:14.1-alpine

docker-compose up -d

Author:
    Jean F. Riffel

