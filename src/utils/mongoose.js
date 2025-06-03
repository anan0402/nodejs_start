module.exports = {
    convertMultiMongooseToObject: function (data) {
        return data.map((object) => object.toObject());
    },
    convertMongooseToObject: function (data) {
        return data ? data.toObject() : data;
    },
};
