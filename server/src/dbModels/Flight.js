module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: String,
        flightCode: String,
        flightProvider: String,
        sourcePortName: String,
        sourcePortCode: String,
        destinationPortName: String,
        destinationPortCode: String,
        scheduledArrival: Date,
        scheduledDeparture: Date,
        status: 'LANDED' | 'ON SCHEDULE' | 'DELAYED'
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Flight = mongoose.model("flight", schema);
    return Flight;
  }