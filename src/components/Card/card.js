// CardComponent.js
import React from "react";
import "./card.css";
import { Card, Space, Flex, Row, Col, Progress } from "antd";
import CustomButton from "../Button/button";
import { calculateAverageScore } from "../../utils";
import {
  openReportModal,
  closeReportModal,
} from "../../store/slice/reportSlice";
import { useDispatch, useSelector } from "react-redux";
import Report from "../../views/report";
const data = [
  {
    PillarName: "Foundation",
    AssignedTo: "Alice",
    Status: "todo",
    Score: 75,
    Progress: 0,
  },
  {
    PillarName: "Infrastructure",
    AssignedTo: "Bob",
    Status: "inprogress",
    Score: 85,
    Progress: 50,
  },
  {
    PillarName: "Foundation",
    AssignedTo: "Alice",
    Status: "todo",
    Score: 75,
    Progress: 0,
  },
  {
    PillarName: "Development",
    AssignedTo: "Charlie",
    Status: "done",
    Score: 90,
    Progress: 100,
  },
  {
    PillarName: "Development",
    AssignedTo: "Charlie",
    Status: "done",
    Score: 90,
    Progress: 100,
  },
  {
    PillarName: "Deployment",
    AssignedTo: "David",
    Status: "todo",
    Score: 65,
    Progress: 10,
  },
  {
    PillarName: "Maintenance",
    AssignedTo: "Eva",
    Status: "inprogress",
    Score: 80,
    Progress: 60,
  },
  {
    PillarName: "Maintenance",
    AssignedTo: "Eva",
    Status: "inprogress",
    Score: 80,
    Progress: 60,
  },
  {
    PillarName: "Security",
    AssignedTo: "Frank",
    Status: "done",
    Score: 95,
    Progress: 100,
  },
  {
    PillarName: "Monitoring",
    AssignedTo: "Grace",
    Status: "todo",
    Score: 70,
    Progress: 20,
  },
  {
    PillarName: "Optimization",
    AssignedTo: "Hank",
    Status: "inprogress",
    Score: 88,
    Progress: 75,
  },
  {
    PillarName: "Testing",
    AssignedTo: "Ivy",
    Status: "done",
    Score: 92,
    Progress: 100,
  },
  {
    PillarName: "Documentation",
    AssignedTo: "Jack",
    Status: "todo",
    Score: 60,
    Progress: 5,
  },
];
console.log(data);

const getJustifyClass = () => {
  const columns = 5;
  const itemsInLastRow = data.length % columns;
  return itemsInLastRow > 1 ? "justify-start" : "justify-around";
};

const CardComponent = () => {
  const dispatch = useDispatch();
  const isReportOpen = useSelector((state) => state.report.isReportOpen);
  const averageScore = calculateAverageScore(data);
  const handleViewReport = () => {
    dispatch(openReportModal());
  };
  const handleBackToDashboard = () => {
    dispatch(closeReportModal());
  };

  return (
    <div className="dashboard">
      {isReportOpen ? (
        <div>
          <button onClick={handleBackToDashboard}>Back to Dashboard</button>
          <Report />
        </div>
      ) : (
        <div>
          <div className="Dashborad-title">Dashboard</div>
          <div className="score-section">
            <div>
              <div className="score-title">Your Maturity Score is</div>
              <div className="report-view" onClick={handleViewReport}>
                View Report
              </div>
            </div>
            <div className="final-score">
              <Progress
                type="circle"
                percent={averageScore.toFixed(2)}
                format={(percent) => `${percent} %`}
                strokeColor="#1877f2"
                remainingColor="#C18A1F"
                strokeWidth="10"
              />
            </div>
          </div>
          <div className={` card-container ${getJustifyClass()}`}>
            {data.map((item, index) => (
              <Card
                key={index}
                className={` ${item.Status}`}
                style={{
                  width: 350,
                  height: 200,
                  margin: 5,
                }}
              >
                <div className="card-content">
                  <div className="card-info">
                    <div className="card-data">{item.PillarName}</div>
                    <div className="card-data">
                      Assigned To: {item.AssignedTo}
                    </div>
                    {item.Status === "inprogress" && (
                      <div className="card-data">Completion Progress is</div>
                    )}
                    {item.Status === "todo" && (
                      <div className="card-start">
                        <CustomButton
                          text="Start"
                          className="custom-btn custom-btn-secondry"
                        ></CustomButton>
                      </div>
                    )}
                  </div>
                  {item.Status === "inprogress" && (
                    <div className="card-progress">
                      <Progress
                        type="circle"
                        percent={item.Progress}
                        format={(percent) => `${percent} %`}
                        strokeColor="#A46C00"
                        remainingColor="#C18A1F"
                        strokeWidth="10"
                      />
                    </div>
                  )}
                  {item.Status === "done" && (
                    <div className="card-progress">
                      <Progress
                        type="circle"
                        percent={item.Score}
                        format={(percent) => `${percent} %`}
                        strokeColor="#2D7B55"
                        remainingColor="#C18A1F"
                        strokeWidth="10"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
