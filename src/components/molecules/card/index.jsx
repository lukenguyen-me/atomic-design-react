import React from "react";
import { Icon } from "react-icons-kit";
import { CardContainer } from "./style";

export default function Card(props) {
  const { icon, title, link = "#" } = props;
  return (
    <CardContainer>
      {icon && (
        <div className="card-icon">
          <Icon icon={icon} size={52} />
        </div>
      )}
      <div>
        {title && (
          <a href={link} className="card-link">
            <h3 className="card-title">{title}</h3>
          </a>
        )}
        <p className="description">{props.children}</p>
      </div>
    </CardContainer>
  );
}
