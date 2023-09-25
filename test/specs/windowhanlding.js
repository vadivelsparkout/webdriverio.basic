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


})

//slider operation

it('slider operation',async()=>{

    await browser.url('https://demo.automationtesting.in/Slider.html')

    const slider=await $("//div[@id='slider']//a")

    await slider.click()

    slider.dragAndDrop({x:100,y:0})

    await browser.pause(5000)


})


})