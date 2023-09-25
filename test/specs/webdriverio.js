import { Key } from 'webdriverio'


describe('describe the test', async()=>{

    xit('senario 1', ()=>{

        //navigate to browser
        
        browser.url('http://104.248.15.243/Layer1x-Event-Frontend/#/messages ')
        
        browser.maximizeWindow()

        console.log(browser.getTitle)

        //promise return - resolved , pending, rejected

    })

    xit('senario 2', async()=>{

        //navigate to browser
        
        await browser.url('http://104.248.15.243/Layer1x-Event-Frontend/#/messages ')
        
        await browser.maximizeWindow()

        console.log( await browser.getTitle)

        //promise return - resolved , pending, rejected

    })

    xit('senario 3', async()=>{

        await $('.classname')

        await $('#id')

        await $("tagname[attribute='value']")

        await $("//tagname[@attribute='value']")

        //$$ finding multiple element

        await $$("//tagname[@attribute='value']")

    })

    xit('senario 4', async()=>{

        //navigate to browser
        
        await browser.url('http://104.248.15.243/Layer1x-Event-Frontend/#/messages ')
        
        await browser.maximizeWindow()

        await console.log( browser.getTitle)

        //promise return - resolved , pending, rejected

        await browser.pause(3000)//wait not recommended

    })



    xit('login function',async()=>{

        browser.url('http://104.248.15.243/Layer1x-Event-Frontend/#/messages ')
      
        await $('#exampleInputEmail1').setValue('williampm144@mailinator.com')

        await $('#password').setValue('Test@123')

        //keyboard actions

        await browser.keys(Key.Enter)

        await $("//button[@type='submit']").click


    })

    xit('wait conditions',async()=>{

        const button= await $("//tagname[@attribute='value']")
     
        browser.waitUntil(async()=>{
     
         await button.getAttribute('value')==='signin'

       },
       
       {
     
        timeout: 5000,
     
        timeoutMsg: 'msg will be displayed',
     
        interval: 1000
     
       })
       
       //other waits without waituntil 

       await button.waitForClickable()

       await button.waitForDisplayed()

       await button.waitForEnabled()

       await button.waitForExist()
      
     
     })

     xit('boolean',async()=>{

        const button=$("//button[@type='submit]")
    
        button.isClickable()
    
        button.isDisplayed()
    
        button.isExisting()
        
    })

    xit('drodown handling',async()=>{

        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')

        await browser.pause(5000)

        const ddown=await $('select.form-control')

        await ddown.click()

        await ddown.selectByIndex[2]

        await browser.pause(5000)

        await  ddown.selectByVisibleText("Consultant")

        await  browser.pause(5000)

        await ddown.selectByAttribute('value','teach')

        await browser.pause(5000)

        //deselect dropdown

        await ddown.deselectByVisibleText('Option Text to Deselect')

        await ddown.deselectByAttribute('value','teach')

        await ddown.deselectByIndex[1]

    })

    xit('expect assertion',async()=>{

        //toHaveurl
        await browser.url('https://webdriver.io/')
        await expect(browser).toHaveUrl('https://webdriver.io')

        //url contain
        await browser.url('https://webdriver.io/')
        await expect(browser).toHaveUrlContaining('webdriver')

        //title
        await browser.url('https://webdriver.io/')
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')

        //title containing
        await browser.url('https://webdriver.io/')
        await expect(browser).toHaveTitleContaining('WebdriverIO')

        //element displayed
        const elem = await $('#someElem')
        await expect(elem).toBeDisplayed()

        //element exist
        const elemen = await $('#someElem')
        await expect(elemen).toExist()

        //to have attribute- same containing
        const myInput = await $('input')
        await expect(myInput).toHaveAttribute('class', 'form-control')

        //to have class- same containing
        const Input = await $('input')
        await expect(Input).toHaveElementClass('form-control', { message: 'Not a form control!', })
        
        //have id 
        const id = await $('#elem')
        await expect(id).toHaveId('elem')
        
        //to have text
        await browser.url('https://webdriver.io/')
        const text = await $('.container')
        await expect(text).toHaveText('Next-gen browser and mobile automation test framework for Node.js')
        await expect(text).toHaveText(['Next-gen browser and mobile automation test framework for Node.js', 'Get Started'])

    })

    xit('chai assertion',async()=>{


    })

    xit('dynamic dropdown',async()=>{

    await browser.url('https://rahulshettyacademy.com/AutomationPractice/')

    const dynamic_dropdown=$('#autocomplete')

    await dynamic_dropdown.setValue('ind')

    await browser.pause(6000)

    let elements=await $$("//li[@class='ui-menu-item']/div")//changing its value

    for (let i = 0; i < await elements.length; i++) {
       
       let country = await elements[i].getText()

       console.log(country)

       if (country === "india") {

        await element[i].click

        await browser.pause(7000)
        
       }
        
    }

    })

    xit('check box',async()=>{

        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')

        const checkbox= await $$("input[type='checkbox']")

        await checkbox[2].click()

        //screenshot

        await browser.saveScreenshot('firstss.png')

        await browser.pause(8000)

    })

    xit('scroll-mouse hover',async()=>{

        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')

        const view=await $('#mousehover')

        await view.scrollIntoView()

        await browser.scroll(0, 200)

        //hover mouse

        await view.moveTo()

        await $('=Top').click()

    })

    xit('alert handling',async()=>{

    await browser.url('https://demo.automationtesting.in/Alerts.html')

    await browser.pause(5000)

    await $("//a[text()='Alert with OK ']").click()

    const button1=await $("//button[@class='btn btn-danger']")

    await button1.click()

    await browser.pause(5000)

    console.log(await browser.isAlertOpen())

    console.log(await browser.getAlertText())

    //simple accept alert

    await browser.acceptAlert()//ok button

    await browser.pause(5000)

   

    // ok and cancel type

    await $("//a[text()='Alert with OK & Cancel ']").click()

    const button2=await $("//button[@class='btn btn-primary']").click()

    await browser.pause(5000)

    await browser.dismissAlert()

    await browser.pause(5000)

   // button2.acceptAlert()

   //prompt alert 

   await $("//a[text()='Alert with Textbox ']").click()

   await browser.pause(5000)

   const button3=await $("//button[@class='btn btn-info']").click()

   await browser.pause(5000)

   await browser.sendAlertText('alert text')

   await browser.pause(5000)

   await browser.acceptAlert()

   await browser.pause(5000)


})

//session reload

xit('reload session',async()=>{

    await browser.url('https://demo.automationtesting.in/Alerts.html')
    
    console.log(await browser.sessionId)

    await browser.reloadSession()

    console.log(await browser.sessionId)

})

//save pdf

xit('save it as pdf',async()=>{

    await browser.url('https://demo.automationtesting.in/Alerts.html')

    await browser.savePDF('screenshot.pdf')

})


xit('should return a cookie for me', async () => {
    await browser.setCookies([
        {name: 'test', value: '123'},
        {name: 'test2', value: '456'}
    ])
    const testCookie = await browser.getCookies(['test'])
    console.log(testCookie); // outputs: [{ name: 'test', value: '123' }]

    const allCookies = await browser.getCookies()
    console.log(allCookies);
    // outputs:
    // [
    //    { name: 'test', value: '123' },
    //    { name: 'test2', value: '456' }
    // ]
})

//get window size
it('should return browser window size', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload')

    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
    await browser.setWindowSize(600, 785)
    console.log(windowSize);
  
})

//upload file 

xit('should upload a file', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload')

    const filePath = 'screenshot.pdf'
    const remoteFilePath = await browser.uploadFile(filePath)

    await $('#file-upload').setValue(remoteFilePath)
    await $('#file-submit').click()
})

xit('should throttle the network', async () => {
    // via static string preset
    await browser.throttle('Regular3G')

    // via custom values
    await browser.throttle({
        offline: false,
        downloadThroughput: 200 * 1024 / 8,
        uploadThroughput: 200 * 1024 / 8,
        latency: 20
    })
})



})