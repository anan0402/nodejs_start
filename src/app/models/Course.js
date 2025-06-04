const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        videoId: { type: String, require },
        slug: { type: String, unique: true },
    },
    {
        timestamps: true,
    },
);

Course.pre('save', function (next) {
    if (!this.slug) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

module.exports = mongoose.model('Course', Course);
