const { expect } = require("chai");

let { Repository } = require("./solution.js");

describe("Tests …", function () {
  let test = {};
  beforeEach(
    () =>
      (test = new Repository({
        name: "string",
        age: "number",
        birthday: "object",
      }))
  );

  describe("First test", function () {
    it("Test the param is object", () => {
      expect(typeof test.props).to.deep.equal("object");
    });
    it("Test counter", () => {
      expect(test.count).to.be.eql(0);
    });
  });
  describe("Test method add", () => {
    it("Test with one entity", () => {
      let entity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
      expect(test.add(entity)).to.equal(0);
    });
    it("Test with two entity", () => {
      let entity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
      test.add(entity);
      expect(test.add(entity)).to.equal(1);
    });
    it("Test with missing data", () => {
      expect(() => test.add({ name: "Pesho", birthday: {} })).to.throw(
        Error,
        "Property age is missing from the entity!"
      );
    });
    it("Test with incorrect property data", () => {
      expect(() => test.add({ name: 123, age: 20, birthday: {} })).to.throw(
        Error,
        "Property name is not of correct type!"
      );
    });
    it("Test with incorrect property data", () => {
      expect(() =>
        test.add({ name: "Peter", age: "20", birthday: {} })
      ).to.throw(Error, "Property age is not of correct type!");
    });
    it("Test with incorrect property name", () => {
      expect(() =>
        test.add({ name2: "Peter", age: 20, birthday: {} })
      ).to.throw(Error, "Property name is missing from the entity!");
    });
    it("Test with incorrect property birthday", () => {
      expect(() =>
        test.add({ name: "Peter", age: 20, birthday: 1991 })
      ).to.throw(Error, "Property birthday is not of correct type!");
    });
  });
  describe("Test method getId()", () => {
    it("Test id with invalid ID", () => {
      expect(() => test.getId(1)).to.throw("Entity with id: 1 does not exist!");
    });
    it("Test id with negative  ID", () => {
      expect(() => test.getId(-1)).to.throw(
        "Entity with id: -1 does not exist!"
      );
    });
    it("Test id with correct ID", () => {
      let newEntity = {
        name: "Gosho",
        age: 22,
        birthday: {},
      };
      test.add(newEntity);
      expect(test.getId(0)).to.be.eql({ name: "Gosho", age: 22, birthday: {} });
    });
  });
  describe("Test update method", () => {
    let newEntity = {
      name: "Gosho",
      age: 22,
      birthday: new Date(1998, 0, 7),
    };
    it("Test with nevalid ID", () => {
      expect(() => test.update(2, newEntity)).to.throw(
        "Entity with id: 2 does not exist!"
      );
    });
    it("Test with update entity", () => {
      let newEntity = {
        name: "Gosho",
        age: 22,
        birthday: { date: 10 },
      };
      test.add({ name: "Pesho", age: 22, birthday: { date: 25 } });
      test.update(0, newEntity);
      expect(test.getId(0)).to.eql({
        name: "Gosho",
        age: 22,
        birthday: { date: 10 },
      });
    });
    it("Test for new entity validation with missed name", () => {
      let newEntity = {
        age: 22,
        birthday: { date: 10 },
      };
      test.add({ name: "Pesho", age: 22, birthday: { date: 25 } });

      expect(() => test.update(0, newEntity)).throw(
        "Property name is missing from the entity!"
      );
    });
    it("Test for new entity validation with wrong format", () => {
      let newEntity = {
        name: 0,
        age: 22,
        birthday: { date: 10 },
      };
      test.add({ name: "Pesho", age: 22, birthday: { date: 25 } });

      expect(() => test.update(0, newEntity)).throw(
        TypeError
      );
    });
  });
  describe("Test del method ", () => {
    it("Test del with incorrect index", () => {
      expect(() => test.del(3)).throw("Entity with id: 3 does not exist!");
    });
  });
  it("Test del with correct index", () => {
    let newEntity = {
      name: "Gosho",
      age: 22,
      birthday: new Date(1998, 0, 7),
    };
    let secondEntity = {
        name: "Todor",
      age: 18,
      birthday: new Date(2001, 0, 9)
    }
    test.add(newEntity);
    test.add(secondEntity)
    test.del(1);

    expect(test.data.has(1)).to.be.equal(false);
  });
  it("Test del with negative index", () => {
   
    expect(() => test.del(-14)).throw("Entity with id: -14 does not exist!");
  });
});
