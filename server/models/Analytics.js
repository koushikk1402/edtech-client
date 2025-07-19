const mongoose = require("mongoose");
const AnalyticsSchema = new mongoose.Schema({ user: String, activity: String });
module.exports = mongoose.model("Analytics", AnalyticsSchema);