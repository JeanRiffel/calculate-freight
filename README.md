# Calculate Freight

<h1 align="center">Calculate Freight</h1>

<p>
    This project aims to calculate freight using various variables. The primary goal is to understand how to apply clean architecture principles to a project.
</p>

<h2> Steps </h2>

- Place an Order    
- Add products to an Order
- Calculate the freight of the Order

    - Freight calculation is possible only when the product is inside an order.
    - Each product has weight, height, length, and width.
    - The calculation considers either volume or weight.

<h2> Instructions </h2>

```bash
npm install
```

<h2> Useful Commands </h2>

If you do not have nvm installed on your computer, I recommend installing it or checking the .nvmrc file to determine the required Node.js version.

- Run the app
   - in dev mode:  npm run start:dev
   - in test mode: npm run test

<h2> Docker Commands </h2>

```bash
docker run --name db-freight --rm -e POSTGRES_USER=john -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=freight -p 5432:5432 -it postgres:14.1-alpine
```

```bash
docker-compose up -d
```

**Author:**
    Jean F. Riffel
