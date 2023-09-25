


describe('window handling',async()=>{

xit('window handling',async()=>{

await browser.url("https://rahulshettyacademy.com/loginpagePractise/")

await $('.blinkingText').click()

//switch window
const handles=await browser.getWindowHandles()

await browser.switchToWindow(handles[1])

const text=await $('h1').getText()

await browser.pause(9000)

console.log(text)

//close current window

await browser.closeWindow()

await browser.switchToWindow(handles[0])

//open new window

await browser.newWindow("https://rahulshettyacademy.com/")//no need to swtich

console.log(await browser.getTitle())

//switch window

await browser.switchWindow("www.google.co.in")//diff b/w switchtowindow and switch window//like switch to default window
//swtichwindow -will switch to browser opened by automation
//switchtowindow- will switch to browser opened by application

});

//slider operation

xit('slider operation',async()=>{

    await browser.url('https://demo.automationtesting.in/Slider.html')

    const slider=await $("//div[@id='slider']//a")

    await slider.click()

    slider.dragAndDrop({x:100,y:0})

    await browser.pause(5000)

});

it('switch to frame',async()=>{

    await browser.url('https://demo.automationtesting.in/Frames.html')

    await browser.pause(5000)

    await browser.maximizeWindow()

    const singleFrame= await $("//iframe[@id='singleframe']")

    await browser.switchToFrame(singleFrame)

    await $("//input[@type='text']").setValue('first frame')

    await browser.pause(5000)

    await $("//a[@class='analystic']")[1].click()

    const frame1=await $('*=MultipleFrames.html')

    await browser.switchToFrame(frame1)

    const frame2= await $('*=SingleFrame.html')

    await browser.switchToFrame(frame2)

    await $("//input[@type='text']")[1].setValue('second value')

    await browser.pause(5000)
})

});







