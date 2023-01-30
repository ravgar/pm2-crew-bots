const { model, Schema } = require('mongoose')

const sema = new Schema({
    guild: String,
	üye: String,
    yetkili: String,
	ilerlerme: String,
	gerileme: String,
	topyetkili: Number,
	date: Date,
	verilenyetki: Array, default: [],
    xp: Number, default: 0,
	yetkilimi: Boolean, default:false
})

module.exports = model("staff_meta", sema)