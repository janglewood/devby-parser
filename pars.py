import urllib2
from lxml import html
from selenium import webdriver

# func = "function x(key) { grecaptcha.execute('6LearF8UAAAAANCBU__yBpFUMde8sw-rZbAZTprP', { action: 'pageview' }).then(function(e) {$.post('/recaptcha', {token: e,imprints: keys}).done(function(i) {console.log(i);});});}"

base_url = "https://companies.dev.by"
content = urllib2.urlopen(base_url).read()
tree = html.fromstring(content)
chromedriver = "/usr/local/bin/chromedriver"
wd = webdriver.Chrome(chromedriver)
wd.get("https://companies.dev.by")

a_list = tree.xpath('//table[@id = "tablesort"]/tbody/tr/td[1]/a')
counter = 0

for a in a_list:
    companie_url = base_url + a.attrib["href"]
    # print("Page %s" % companie_url)
    content = urllib2.urlopen(companie_url).read()
    tree = html.fromstring(content)
    span_list = tree.xpath(
        '//div[@class = "sidebar-for-companies"]/div/ul/li[1]/span[@data-verify]'
    )
    for span in span_list:
        key = span.attrib["data-verify"]
        email = wd.execute_script(open("./pars.js").read(), key)
        counter = counter + 1
        # print(companie_url + ", " + key)
        print(email)
print("Counter - {}".format(counter))
