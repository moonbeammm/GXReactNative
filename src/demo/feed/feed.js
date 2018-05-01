/*
 * @Author: sgx 
 * @Date: 2018-05-01 18:03:11 
 * @Last Modified by:   sgx 
 * @Last Modified time: 2018-05-01 18:03:11 
 */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image , } from "react-native";

// 导入json数据
var viewModel = require("../../../res/data/feed.json");

export default class feed extends Component {
  render() {
    return <View style={styles.container}>{this.cells()}</View>;
  }

  cells() {
    var cells = [];
    for (var i = 0; i < viewModel.data.length; i++) {
      var model = viewModel.data[i];
      cells.push(
        <View key={i} style={styles.cell}>
          <Image source={{ uri: model.icon }} style={styles.coverImage} />
          <Text style={styles.titleLabel}>{model.title}</Text>
        </View>
      );
    }
    return cells;
  }
}

var Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const rowMargin = 10;
const cellWidth = (ScreenWidth - 3 * rowMargin) / 2.0;

const styles = StyleSheet.create({
  container: {
    top: 20,
    flex: 1,
    backgroundColor: "#F5A341",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cell: {
    marginLeft: rowMargin,
    alignItems: "center",
    height: 200
  },
  coverImage: {
    width: cellWidth,
    height: 150
  },
  titleLabel: {
    top: 10
  }
});
