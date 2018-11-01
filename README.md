# FakeProfile
A Javascript for generate some basic information without external dependency

## How to use

```javascript
  const fakeProfile = require('fake-profile')
  const result = fakeProfile(options)
  
  /*{ firstName: 'Đỗ',
    lastName: 'Thanh Long',
    gender: 'male',
    birthday: '10-04-1999',
    email: 'dothanhlong861798@gmail.com',
    password: 'wyhIDaQM' }*/
```
Fake Profile accepts options:
* birthdayFormat: 'dd-mm-yyyy',
* gender: '',
* minAge: 10,
* maxAge: 60,
* region: 'vn',
* emailDomain: 'gmail.com',
* passwordLength: 8