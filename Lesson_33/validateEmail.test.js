describe("validateEmail", function() {
  describe('invalid data', function(){
    it('not a string', function() {
      assert.isFalse(validateEmail(222), 'number error');
      assert.isFalse(validateEmail(true), 'boolean error');
      assert.isFalse(validateEmail({}), 'object error');
    });
    it('empty string or whitespace', function() {
      assert.isFalse(validateEmail(''), 'empty string error');
      assert.isFalse(validateEmail('     '), 'whitespace error');
    });
    it('too short string', function() {
      assert.isFalse(validateEmail('a@b.c'), 'too short string error');
    });
    it('no @ character', function(){
      assert.isFalse(validateEmail('emailgmail.com'), 'no @ character error');
    });
    it('invalid domain name', function(){
      assert.isFalse(validateEmail('email@gmailcom'), 'missing dot error');
      assert.isFalse(validateEmail('e.mail.@gmail.com'), 'invalid dot position error');
      assert.isFalse(validateEmail('email..gmail.com'), 'multiple dots error');
    });
  });
  describe('valid data', function(){
    it('contains @ character and valid domain name', function(){
      assert.isTrue(validateEmail('email@gmail.com'), 'contains @ character error');
      assert.isTrue(validateEmail('e.mail@gmail.com'), 'contains @ character error');
    });
  });
});
