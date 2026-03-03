// SAMPLE COMPONENT FILE
'use client';
import {Component} from "react";

export default class Card extends Component<{ title: string, description: string }> {
  render() {
    const {title, description} = this.props;
    return (
      <div style={{border: "1px solid black", padding: "16px", width: "300px"}}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}
