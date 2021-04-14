using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CA_post_deployment_tests
{

 //public IWebDriver driver = new ChromeDriver("C:\Users\kezze\OneDrive\Desktop");

  class Program
    {
        static void Main(string[] args)
        {

      [Test]
      public void createNewUserLogin()
      {
        driver.Navigate().GoToUrl("http://localhost:4200\\");
        driver.FindElement(By.CssSelector(".loginForm")).Click();
        driver.FindElement(By.CssSelector(".registerLink")).Click();
        driver.FindElement(By.CssSelector(".firstname")).Click();
        driver.FindElement(By.CssSelector(".firstname")).SendKeys("Jane");
        driver.FindElement(By.CssSelector(".lastname")).SendKeys("Doe");
        driver.FindElement(By.CssSelector(".username")).SendKeys("10536252@mydbs.ie");
        driver.FindElement(By.CssSelector(".password")).SendKeys("Password@01");
        driver.FindElement(By.CssSelector(".avatar")).Click();
        driver.FindElement(By.CssSelector(".avatar")).SendKeys("www.google.ie");
        driver.FindElement(By.CssSelector(".login")).Click();
        driver.Navigate().GoToUrl("http://localhost:4200/login");
        driver.FindElement(By.CssSelector(".username")).Click();
        driver.FindElement(By.CssSelector(".username")).SendKeys("10536252@mydbs.ie");
        driver.FindElement(By.CssSelector(".password")).Click();
        driver.FindElement(By.CssSelector(".password")).SendKeys("Password@01");
        driver.FindElement(By.CssSelector(".login")).Click();
      }
      [Test]
      public void checkNoAdsOnMyAdPage()
      {
        driver.Navigate().GoToUrl("http://localhost:4200/myads");
        driver.Manage().Window.Size = new System.Drawing.Size(1050, 708);
        driver.FindElement(By.CssSelector(".nav:nth-child(2)")).Click();
        {
          var elements = driver.FindElements(By.CssSelector(".app.my-ads"));
          Assert.True(elements.Count == 0);
        }
      }
      [Test]
      public void addNewAdd()
      {
        driver.Navigate().GoToUrl("http://localhost:4200/home");
        driver.Manage().Window.Size = new System.Drawing.Size(1050, 708);
        driver.FindElement(By.CssSelector(".nav:nth-child(1)")).Click();
        driver.FindElement(By.CssSelector("path")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)")).SendKeys("New Test Ad");
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(2)")).SendKeys("Test Description");
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(3)")).SendKeys("www.google.ie");
        driver.FindElement(By.CssSelector(".createAd")).Click();
        driver.FindElement(By.CssSelector(".swal2-confirm")).Click();
        var elements = driver.FindElements(By.CssSelector("app-adverts"));
        Assert.True(elements.Count > 0);
        Assert.That(driver.FindElement(By.CssSelector(".advert:nth-child(1) > .image")).Text, Is.EqualTo("New Test Ad"));
      }
      [Test]
      public void verifyAdIsOnMyAdsPage()
      {
        driver.Navigate().GoToUrl("http://localhost:4200\\myads");
        driver.FindElement(By.CssSelector(".nav:nth-child(2)")).Click();
        var elements = driver.FindElements(By.CssSelector(".adDetails"));
        Assert.True(elements.Count > 0);
      }
      [Test]
      public void addThreeAds()
      {
        driver.Navigate().GoToUrl("http://localhost:4200/home");
        driver.Manage().Window.Size = new System.Drawing.Size(1050, 708);
        driver.FindElement(By.CssSelector("path")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)")).Click();
        {
          var element = driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)"));
          Actions builder = new Actions(driver);
          builder.DoubleClick(element).Perform();
        }
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(2)")).Click();
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(1)")).SendKeys("Test Ad One");
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(2)")).Click();
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(2)")).SendKeys("One more description");
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(3)")).Click();
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(3)")).SendKeys("www.google.ie");
        driver.FindElement(By.CssSelector(".createAd")).Click();
        driver.FindElement(By.CssSelector(".swal2-confirm")).Click();
        driver.FindElement(By.CssSelector(".addAdverts")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)")).SendKeys("Test ad number two");
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(2)")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(2)")).SendKeys("Two more descriptions");
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(3)")).Click();
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(3)")).SendKeys("www.facebook.com");
        driver.FindElement(By.CssSelector(".createAd")).Click();
        driver.FindElement(By.CssSelector(".swal2-confirm")).Click();
        driver.FindElement(By.CssSelector(".svg-inline--fa")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(1)")).Click();
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(1)")).SendKeys("Test number three");
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(2)")).Click();
        driver.FindElement(By.CssSelector(".ng-untouched:nth-child(2)")).SendKeys("Description number Three");
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(3)")).Click();
        driver.FindElement(By.CssSelector(".ng-pristine:nth-child(3)")).SendKeys("www.hotmail.com");
        driver.FindElement(By.CssSelector(".createAd")).Click();
        driver.FindElement(By.CssSelector(".swal2-confirm")).Click();
        var elements = driver.FindElements(By.CssSelector("app-adverts"));
        Assert.True(elements.Count > 0);
      }
      [Test]
      public void logoutUser()
      {
        driver.Navigate().GoToUrl("http://localhost:4200/home");
        driver.FindElement(By.CssSelector(".nav:nth-child(3)")).Click();
        var elements = driver.FindElements(By.CssSelector(".login"));
        Assert.True(elements.Count > 0);
      }





    }
  }
}
