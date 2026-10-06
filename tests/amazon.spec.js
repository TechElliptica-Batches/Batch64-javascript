import { test, expect } from '@playwright/test';


  test(`amazon highest and lowest price`, async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    await page.getByPlaceholder("Search Amazon").fill("mobile")
    await page.getByPlaceholder("Search Amazon").press("Enter");
    await page.waitForTimeout(10000);

   let allTexts =  await page.locator("//div[@data-cy='title-recipe']//h2/span").allTextContents();
    let mobilePriceJson = {};

 for(let index in allTexts){    
// for(let index = 0; index < allTexts.length ; index++){
        try{
            let xpath = "(//span[text()='"+allTexts[index]+"']/ancestor::div[contains(@class,'a-section')])[1]//span[@class='a-price-whole']";
            let amountArray = await page.locator(xpath).allTextContents();
            if(amountArray.length > 0){
            let price = amountArray[0];
            price = price.replaceAll(",","");
            price = price.replaceAll("\.","");
            mobilePriceJson[allTexts[index]] = parseInt(price);
            }    
        }catch(e){
            
        }
    }

    console.log(mobilePriceJson);
  });