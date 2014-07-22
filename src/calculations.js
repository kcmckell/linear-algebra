

/**
 * Sum every element.
 * @return {Number}
 */
Matrix.prototype.getSum = function(value) {
  var thisData = this.data,
    rows = this.rows,
    cols = this.cols;

  var sum = 0;

  for (var i = 0; i<rows; ++i) {
    for (var j = 0; j<cols; ++j) {
      sum += thisData[i][j];
    }
  }
  
  return sum; 
};

