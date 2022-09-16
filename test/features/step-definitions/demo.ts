import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(5000);
  browser.debug(); //es como pausar igual que .pause(7000)  7 segundos
  let ele = await $("#L2AGLb");
  await ele.click();
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(">> my searchItem  is ${searchItem}");
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^click on the first search result$/, async function () {
  let ele = await $("<h3>");
  ele.click();
  await browser.pause(5000);
});

Then(/^The URL should match (.*)$/, async function (expectedURL) {
  console.log(">> expected URL is: ${expectedURL}");
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/**
 * *Web Interactions
 */

Given (/^A web page is opened$/, async function(){
  await browser.url("https://the-internet.herokuapp.com/tables")
  await browser.setTimeout({implicit: 15000, pageLoad: 10000})
  await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function () {
  // /**
  //  * 1. Input box
  //  * Actions:
  //  * 1. Type into input box
  //  * 2. Clear the fieldand type or just add value
  //  * 3. click and type
  //  * 4. Slow typing
  //  */
  // let num = 12345
  // let strNum = num.toString()
  // let ele = await $('[type=number]')
  // //await ele.setValue ("12345")
  // //await browser.pause(3000)
  // await ele.click()
  // for(let i=0; i< strNum.length; i++){
  //   let charStr = strNum.charAt(i)
  //   await browser.pause(1000)
  //   await browser.keys(charStr)
  // }
  /**
   * 2. Dropdown
   * Actions:
   * 1. Assert default option is selected
   * 2. Select by attibute, text, index
   * 3. Get a list of options
   */
  // //1. Assert default option is selected
  // let ele = await $('//select/option[@selected="selected"]');
  // let val = await ele.getText();
  // let expText = "Please select an option";
  // console.log(val);
  // console.log(expText);
  // chai.expect(val).to.equal(expText);
  // await browser.debug();

  //   //2. Select by attibute, text, index
  // let ddele = await $('#dropdown')
  // await ddele.selectByVisibleText("Option 2")     //Texto visible
  // await browser.pause(3000)
  // await ddele.selectByAttribute("value", "1")     //Atributo y valor
  // await browser.pause(3000)
  // await ddele.selectByIndex(2)                    //indice
  // await browser.debug();

  //3. Get a list of options
  //   let eleArray = await $$("select > option");
  //   let arr = [];
  //   for (let i = 0; i < eleArray.length; i++) {
  //     let ele = eleArray[i];
  //     let val = await ele.getText();
  //     console.log(">> imrpimo el valor del dropdown", await ele.getText());
  //     arr.push(val);
  //   }

  //   console.log(`>>Las opciones del dropdown son: ${arr}`);

    /**
   * 3. Chceckbox
   * Actions:
   * 1. Select an option
   * 2. Unselect an option (if selected)
   * 3. Assert if option is selected
   * 4. Select all options
   */

    // let chele = await $('//form[@id="checkboxes"]/input[2]')
    // // if (await chele.isSelected()){      //comprueba si el checkbox esta seleccionado o no 
    // //   await chele.click()
    // // }
    // let isChecked = await chele.isSelected() //guarda el estado del checkbox (activo true, inactivo false)
    // chai.expect(isChecked).to.be.true;

    // let chEleArr = await $$('//form[@id="checkboxes"]/input') //selecciona todos los checkbox del input
    // for (let i=0; i<chEleArr.length; i++){                    //los recorre para activarlos todos
    //   let ele= chEleArr[i]
    //   if (!await ele.isSelected()){
    //     ele.click()
    //   }
    // }

    /**
   * 4. Windows handling
   * Actions:
   * 1. Launch the browser
   * 2. Open another window
   * 3. Switch to the window based on title
   * 4. Switch back to the main window
   * 
   * Methods used:
   * 1. getTitle()
   * 2. getWindowHandle()
   * 3. getWindowHandles()
   * 4. switchToWindow()
   */
// //Open new window
// await $("=Click Here").click();
// await $("=Elemental Selenium").click();
// //getTitle()
// let currentWindowTitle = await browser.getTitle();
// let parentWindowHandle = await browser.getWindowHandle();
// console.log(`>>>>>> the current window is ${currentWindowTitle}`);

// //switch to specific window
// let WindowHandles = await browser.getWindowHandles()
// for (let i = 0; i < WindowHandles.length; i++) {
//   console.log(`>>>>> the window handle ${WindowHandles[i]}`);
//   await browser.switchToWindow(WindowHandles[i]);
//   currentWindowTitle = await browser.getTitle();
//   if (currentWindowTitle ==="Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro") {
//     await browser.switchToWindow(WindowHandles[i]);
//     let headerText = await $(`<h1>`).getText();
//     console.log(`el header text is  ${headerText}`);
//     //Rest of the actions go here....
//     break; //para salir fuera el bucle y del for
//   }
// }


// //Switch back to the parent window
// //console.log(`>>>>>> the parent window is ${parentWindowHandle}`);
// await browser.pause(5000);
// await browser.switchToWindow(parentWindowHandle);
// await browser.pause(5000);
// let parentHeaderText = await $(`<h3>`).getText();
// console.log(`>>>>>> the parent window is ${parentHeaderText}`);
// //continue with the rest of the execution..

    /**
   * 5. Handling alerts
   * 
   * Methods used:
   * 1. isAlertOpen()
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. getAlertText()
   * 5. sendAlertText()
   */
  
  // //Acept alert
  // //await $('//button[.="Click for JS Alert"]').click()    //como Text
  // await $('button=Click for JS Alert').click()              //como XPath
  // await browser.pause(2000)
  // if (await browser.isAlertOpen()){
  //     await browser.acceptAlert()
  //     await browser.pause(2000)
  // }

  // //Dismiss JS confirm
  // await $('button=Click for JS Confirm').click()
  // await browser.pause(2000)
  // if (await browser.isAlertOpen()){
  //   await browser.dismissAlert()
  //   await browser.pause(2000)
  // }

  //   //Dismiss JS Prompt
  //   await $('button=Click for JS Prompt').click()
  //   await browser.pause(2000)
  //   if (await browser.isAlertOpen()){
  //     let alertText = await browser.getAlertText()
  //     console.log (`>>>>>>>> El texto del alert es ${alertText}`)
  //     await browser.sendAlertText ("Escribo texto de prueba en el prompt")
  //     await browser.pause(2000)
  //     await browser.acceptAlert()
      
  //   }
 
    /**
   * 5. File Upload
   * 
   **/
// console.log(process.cwd());
// console.log(`>>>>>> the current window is`);
//   //await $('#file-upload').setValue(`${process.cwd()}/data/fileupload/dummy.txt`) 
//   await $('#file-upload').setValue(`E:/0.Automation/workspace/1-curso/data/fileupload/dummy.txt`)  
//   await $('#file-submit').click()
//   await browser.pause(5000)


    /**
   * 6. Frames
   * 
   * Methods used:
   * 1. switchToFrame()
   * 2. switchToParentFrame()
   */
  
  // await $("=iFrame").click()
  // let ele = await $("#mce_0_ifr")
  // await browser.switchToFrame(ele)
  // //Interaction with the frames....
  // await $('#tinymce').click()
  // await browser.keys(['Meta','A'])
  // await browser.pause(3000)
  // await browser.keys("Delete")


  // // let textFrame = await $('#tinymce').getText()
  // // console.log(textFrame);
  // // chai.expect(textFrame,`Your content goes here.`)
  // await $('#tinymce').setValue("typing into a frame....")
  // browser.switchToParentFrame()



  
    /**
   * 7. Basic scrolling
   * 
   * Methods used:
   * element methods
   * 1. Scrollintoview
   */
  // await $('h2=Discover Amazon Basics').scrollIntoView() //si se pone false el sroll muestra el elemento al final de la pagina. Por defecto es true y lo muestra en la parte superior de la pagina
  // await browser.pause(3000)

  /**
   * Web table:
   * What are going to cover:
   * 1. Check number of rows and columns
   * 2. Get whole table data
   * 3. Get single row (based on a condition)
   * 4. Get single column
   * 5. Get single cell
   */
  /** 1. Check number of rows and columns*/
  let rowCount = await $$("//table[@id='table1']/tbody/tr").length
  chai.expect(rowCount).to.equal(4)
  console.log (`>>>>>>>> El valor de la varible columnCount es ${rowCount}`)
  let columnCount = await $$("//table[@id='table1']/thead/tr/th").length
  chai.expect(columnCount).to.equal(6)
  console.log (`>>>>>>>> El valor de la varible columnCount es ${columnCount}`)

  /** 2. Get whole table data*/
  //let rowData = await $$("//table[@id="table1"]/tbody/tr[2]/td[4]")
  for (let i=0; i<rowCount; i++){
    for (let j=0; j<columnCount; j++){
      let data = await $$("//table[@id='table1']/tbody/tr[i]/td[j]").getText()
    }
  }
  //comment in demo.ts

  await browser.debug();


});

