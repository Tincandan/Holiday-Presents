# Holiday-Presents
E-commerce site, that will be deployed on Heroku, and meet the requirements for Group Project 2

## User Story
AS Full Stack Web Developers at a small retail business  
WE WANT a full stacked e-commerce website that uses the latest technologies  
SO THAT my small business can compete with other e-commerce business

## Acceptance Criteria

- GIVEN I need Holiday Presents
- WHEN I access the website, I'm presented with three options: Thanksgiving, Christmas, and Miscellaneous.
	- THEN I click on login to sign up for the website
- WHEN redirected to the login/ sign up page to create a account or to sign in if IU already have an account
	- THEN I'm redirected back to the homepage 
- WHEN I click on the Thanksgiving theme/ tab
	- THEN I'm redirected back to a page that populates Thanksgiving items with a picture of the items, name of the items, and prices.
- WHEN I click on the Christmas theme/ tab
	- THEN I'm redirected back to a page that populates Christmas items with a picture of the items, name of the items, and prices.
-  WHEN I click on the Miscellaneous theme/ tab 
	- THEN I'm redirected back to a page that populates Miscellaneous items of past Holidays items with a picture of the items, name of the items, and prices.
-  WHEN I click an item 
	- THEN I redirected to the item's page with a picture, name of the item, price, product description, add to cart button and item id.
-  WHEN I click to add item to cart
	- THEN the item saved to my cart
-  WHEN I click on the cart  
	- THEN I'm redirected to the cart page where all my saved items are populated
-   WHEN stay idle on a page for more than 5 mins
	- THEN I must resign into my account to get access to my cart again


## New Technologies 
- CSS Framework: https://bulma.io/

## Mockup


## Future Development
- Users can edit their sign in credentials 
- UPC code
- Checkout system

## Testing
```
1. Add a .env file 
2. npm i // to install npm
3. mysql -u root -p // sign into MySQL
4. SOURCE filename.sql // inject data 
5. node server.js // create the tables
6. npm run seed // seed the data
8. npm run watch or npm start // to start server
7. Login into Heroku and follow the deployment instructions 

``` 

## Credits
1. Navbar:  https://www.cssscript.com/header-navbar-templates/
