//describe - test suite

describe('describe the test',async ()=>{


it('senario 1',async ()=>{

//navigate to browser

await browser.url('https://rahulshettyacademy.com/loginpagePractise/')

await browser.maximizeWindow()

await browser.minimizeWindow()


//return - resolved , pending, rejected

//get title of the page

console.log(await browser.getTitle)

//$ finding the element

await $('.classname')

await $('#id')

await $("tagname[attribute='value']")

await $("//tagname[@attribute='value']")

//$$ finding multiple element

await $$("//tagname[@attribute='value']")

})

//waituntil

it('wait conditions',async()=>{

   const button= await $$("//tagname[@attribute='value']")

   browser.waitUntil(async()=>{

    await button.getAttribute('value')==='signin'

  },
  
  {

   timeout: 5000,

   timeoutMsg: 'msg will be displayed',

   interval: 1000

  })
 

})

it('basic actions',async()=>{

    //set values
   
    await $(input[name='username']).setValue('user email')

    //storing the element 

    const password= $("//input[@type='password']")

         await password.setValue('password')

    //click
    
    const button=$("//button[@type='submit]")

         await button.click()

    //double click

    await button.doubleClick()

    //drag and drop

    const element1= await $('.classname')

    const element2= await $('.classname')

    await element1.dragAndDrop(element2)

    //select tag drop down

    const dropdown=await $("//select[@classname='value]")

    dropdown.selectByIndex[1]

    dropdown.selectByVisibleText('visible text')

    dropdown.selectByAttribute('key','value')

})

it('boolean',async()=>{

    const button=$("//button[@type='submit]")

    button.isClickable()

    button.isDisplayed()

    button.isExisting()
    
})

//pause the browser

it('browser pause',async()=>{

await browser.pause(5000)

})

})