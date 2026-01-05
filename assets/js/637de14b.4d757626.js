"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["37052"],{555371(e,a,s){s.r(a),s.d(a,{metadata:()=>r,default:()=>h,frontMatter:()=>t,contentTitle:()=>i,toc:()=>l,assets:()=>o});var r=JSON.parse('{"id":"zh-CN/cn_Edge_Robotics","title":"\u673A\u5668\u4EBA","description":"\u672C\u4E3B\u9898\u4ECB\u7ECD Seeed Studio \u7684\u673A\u5668\u4EBA\u4EA7\u54C1\u6587\u6863\u4E0E\u5B66\u4E60\u8BFE\u7A0B\u3002","source":"@site/docs/zh-CN/cn_Edge_Robotics.md","sourceDirName":"zh-CN","slug":"/cn/robotics_page","permalink":"/cn/robotics_page","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/cn_Edge_Robotics.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1748476800000,"frontMatter":{"description":"\u672C\u4E3B\u9898\u4ECB\u7ECD Seeed Studio \u7684\u673A\u5668\u4EBA\u4EA7\u54C1\u6587\u6863\u4E0E\u5B66\u4E60\u8BFE\u7A0B\u3002","title":"\u673A\u5668\u4EBA","keywords":["robotics","nvidia","ros","isaac","learning","reinforcement learning"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/cn/robotics_page","last_update":{"date":"05/29/2025","author":"ZhuYaohui"}},"sidebar":"CNSidebar","previous":{"title":"Quantum Mini Linux \u5F00\u53D1\u5957\u4EF6","permalink":"/cn/Quantum-Mini-Linux-Development-Kit"},"next":{"title":"\u4E3A LeRobot SO-101 \u673A\u68B0\u81C2\u5FAE\u8C03 Isaac GR00T N1.5 \u5E76\u5728 Jetson Thor \u4E0A\u90E8\u7F72","permalink":"/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor"}}'),n=s(474848),c=s(28453);let t={description:"\u672C\u4E3B\u9898\u4ECB\u7ECD Seeed Studio \u7684\u673A\u5668\u4EBA\u4EA7\u54C1\u6587\u6863\u4E0E\u5B66\u4E60\u8BFE\u7A0B\u3002",title:"\u673A\u5668\u4EBA",keywords:["robotics","nvidia","ros","isaac","learning","reinforcement learning"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/robotics_page",last_update:{date:"05/29/2025",author:"ZhuYaohui"}},i="\u{1F916} \u673A\u5668\u4EBA",o={},l=[];function d(e){let a={blockquote:"blockquote",em:"em",h1:"h1",header:"header",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"-\u673A\u5668\u4EBA",children:"\u{1F916} \u673A\u5668\u4EBA"})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:'"\u4ECA\u5929\u7684\u79D1\u5B66\u5C31\u662F\u660E\u5929\u7684\u6280\u672F\u3002" - Edward Teller'})}),"\n"]}),"\n",(0,n.jsxs)("div",{className:"robotic-tab-container",children:[(0,n.jsx)("input",{type:"radio",id:"tab-hardware",name:"robo-tabs",defaultChecked:!0,className:"tab-input-hidden"}),(0,n.jsx)("input",{type:"radio",id:"tab-learning",name:"robo-tabs",className:"tab-input-hidden"}),(0,n.jsx)("div",{className:"tab-nav-wrapper",children:(0,n.jsxs)("nav",{className:"tab-nav",children:[(0,n.jsxs)("label",{htmlFor:"tab-hardware",className:"tab-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F4E6}"}),(0,n.jsx)("span",{className:"text",children:"\u786C\u4EF6\u6587\u6863\u5E93"})]}),(0,n.jsxs)("label",{htmlFor:"tab-learning",className:"tab-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F393}"}),(0,n.jsx)("span",{className:"text",children:"\u5B66\u4E60\u4E2D\u5FC3"}),(0,n.jsx)("span",{className:"badge",children:"New"})]}),(0,n.jsx)("div",{className:"tab-slider"})]})}),(0,n.jsxs)("div",{className:"tab-content content-hardware",children:[(0,n.jsx)("div",{className:"quick-nav-container",children:(0,n.jsxs)("nav",{className:"quick-nav",children:[(0,n.jsxs)("a",{href:"#robot-kits",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F4E6}"}),(0,n.jsx)("span",{className:"text",children:"\u673A\u5668\u4EBA\u5957\u4EF6"}),(0,n.jsx)("div",{className:"hover-effect"})]}),(0,n.jsxs)("a",{href:"#actuators",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u2699\uFE0F"}),(0,n.jsx)("span",{className:"text",children:"\u5173\u8282\u6267\u884C\u5668"}),(0,n.jsx)("div",{className:"hover-effect"})]}),(0,n.jsxs)("a",{href:"#sensors",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F441}\uFE0F"}),(0,n.jsx)("span",{className:"text",children:"\u4F20\u611F\u5668"}),(0,n.jsx)("div",{className:"hover-effect"})]}),(0,n.jsxs)("a",{href:"#software",className:"nav-item",children:[(0,n.jsx)("span",{className:"icon",children:"\u{1F4BB}"}),(0,n.jsx)("span",{className:"text",children:"\u8F6F\u4EF6"}),(0,n.jsx)("div",{className:"hover-effect"})]})]})}),(0,n.jsxs)("div",{className:"nav-grid",children:[(0,n.jsx)("h2",{id:"robot-kits",children:"\u{1F4E6} \u673A\u5668\u4EBA\u5957\u4EF6"}),(0,n.jsx)("div",{className:"category-group",children:(0,n.jsxs)("div",{className:"category-card robot-kits",children:[(0,n.jsx)("h3",{children:"\u{1F917} SO-Arm\u673A\u68B0\u81C2"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/lerobot_so100m_new/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"SO100/101 \u673A\u68B0\u81C2"})}),(0,n.jsx)("a",{href:"/cn/simulate_soarm101_by_leisaac/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"SO10x \u673A\u68B0\u81C2\u4E0E LeIsaac"})}),(0,n.jsx)("a",{href:"/cn/control_robotic_arm_via_phospho/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Phospho Lerobot"})}),(0,n.jsxs)("a",{href:"/cn/training_soarm101_policy_with_isaacLab/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"So Arm \u5F3A\u5316\u5B66\u4E60"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"SO101 \u4E0E NVIDIA GR00T"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,n.jsx)("h3",{children:"\u{1F697} Lekiwi\u79FB\u52A8\u5E95\u76D8"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/lerobot_lekiwi/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Lekiwi \u79FB\u52A8\u5E95\u76D8"})}),(0,n.jsx)("a",{href:"/cn/sound_follow_robot/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Lekiwi \u58F0\u97F3\u8DDF\u968F"})})]}),(0,n.jsx)("h3",{children:"\u{1F9BE} StarAI\u673A\u68B0\u81C2"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsxs)("a",{href:"/cn/lerobot_starai_arm/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"StarAI \u673A\u68B0\u81C2"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/cn/starai_arm_ros_moveit/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"StarAI \u673A\u68B0\u81C2 MoveIt 2"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsx)("a",{href:"/cn/control_robotic_arm_via_gr00t",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"StarAI \u4E0E NVIDIA GR00T"})})]}),(0,n.jsx)("h3",{children:"\u{1F9BF} \u8F6E\u8DB3"}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsxs)("a",{href:"/cn/StackForce_Mini_Wheeled_Legged_Robot",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"\u5C0F\u8F6E\u8DB3\u673A\u5668\u4EBA"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})}),(0,n.jsx)("h3",{children:"\u{1F590}\uFE0F \u7075\u5DE7\u624B"}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsxs)("a",{href:"/cn/hand_amazinghand/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"AmazingHand"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})}),(0,n.jsx)("h3",{children:"\u{1F980} \u672B\u7AEF\u6267\u884C\u5668"}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsxs)("a",{href:"/cn/dm_gripper/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"DM \u5939\u722A"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})})]})}),(0,n.jsx)("h2",{id:"actuators",children:"\u2699\uFE0F \u6267\u884C\u5668"}),(0,n.jsx)("div",{className:"category-group",children:(0,n.jsx)("div",{className:"category-card actuators",children:(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/myactuator_series/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"MyActuator X \u7CFB\u5217"})}),(0,n.jsx)("a",{href:"/cn/damiao_series/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Damiao DM43 \u7CFB\u5217"})}),(0,n.jsx)("a",{href:"/cn/feetech_servo/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Feetech STS3215 \u8235\u673A"})}),(0,n.jsx)("a",{href:"/cn/hightorque_control",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"HighTorque \u7CFB\u5217"})}),(0,n.jsx)("a",{href:"/cn/fashionstar_servo/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Fashionstar \u7CFB\u5217"})}),(0,n.jsx)("a",{href:"/cn/stackforce_series/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Stackforce \u7CFB\u5217"})}),(0,n.jsxs)("a",{href:"/cn/robstride_control/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"RobStride \u63A7\u5236"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})]})})}),(0,n.jsx)("h2",{id:"sensors",children:"\u{1F441}\uFE0F \u4F20\u611F\u5668"}),(0,n.jsx)("div",{className:"category-group",children:(0,n.jsxs)("div",{className:"category-card sensors",children:[(0,n.jsx)("strong",{children:"\u{1F4E1} LiDAR"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/robosense_lidar/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"RoboSense"})}),(0,n.jsx)("a",{href:"/cn/mid360/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Livox MID360"})}),(0,n.jsx)("a",{href:"/cn/a_loam/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"A-LOAM \u7B97\u6CD5"})}),(0,n.jsx)("a",{href:"/cn/slamtec/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Slamtec \u7CFB\u5217"})})]}),(0,n.jsx)("strong",{children:"\u{1F4F7} \u76F8\u673A"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/orbbec_gemini2/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Orbbec Gemini 2"})}),(0,n.jsxs)("a",{href:"/cn/orbbec_gemini_335lg",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"Gemini 335Lg \u6DF1\u5EA6\u76F8\u673A"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/cn/orbbec_gemini336",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"Gemini 336 \u6DF1\u5EA6\u76F8\u673A"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsx)("a",{href:"/cn/sensing_gmsl_cameras",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"SENSING GMSL2 \u76F8\u673A"})}),(0,n.jsxs)("a",{href:"/cn/ac1",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"RoboSense AC1"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsx)("a",{href:"/cn/orbbec_depth_camera_on_ros/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Orbbec \u4E0E ROS"})}),(0,n.jsx)("a",{href:"/cn/orb_slam3_orbbec_gemini2/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ORB-SLAM3 \u4E0E Gemini2"})}),(0,n.jsx)("a",{href:"/cn/csi_camera_on_ros/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Jetson \u4E0A\u7684 CSI \u76F8\u673A"})}),(0,n.jsx)("a",{href:"/cn/pycuvslam_recomputer_robotics/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"PyCuVSLAM"})})]}),(0,n.jsx)("strong",{children:"\u{1F3A4} \u8BED\u97F3"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/ReSpeaker_Core_v2.0/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ReSpeaker Core v2.0"})}),(0,n.jsx)("a",{href:"/cn/ReSpeaker_Mic_Array_v2.0/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ReSpeaker Mic Array v2.0"})})]}),(0,n.jsx)("strong",{children:"\u{1F9ED} IMU"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/hexfellow_y200/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"HEXFELLOW Y200"})}),(0,n.jsx)("a",{href:"/cn/wheeltec_imu/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"WHEELTEC IMU"})})]})]})}),(0,n.jsx)("h2",{id:"software",children:"\u{1F4BB} \u8F6F\u4EF6"}),(0,n.jsx)("div",{className:"category-group",children:(0,n.jsxs)("div",{className:"category-card software",children:[(0,n.jsx)("strong",{children:"ROS \u751F\u6001\u7CFB\u7EDF"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/installing_ros1/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ROS 1 \u5B89\u88C5"})}),(0,n.jsx)("a",{href:"/cn/install_ros2_humble/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"ROS 2 \u5B89\u88C5"})}),(0,n.jsx)("a",{href:"/cn/install_isaacros/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac ROS \u5B89\u88C5"})}),(0,n.jsx)("a",{href:"/cn/isaac_ros_apriltag/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac ROS AprilTag"})}),(0,n.jsx)("a",{href:"/cn/isaac_ros_visual_slam/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac ROS V-SLAM"})})]}),(0,n.jsx)("strong",{children:"PX4"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/control_px4_with_recomputer_jetson/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"PX4 \u4E0E Jetson"})}),(0,n.jsx)("a",{href:"/cn/object_tracking_with_reComputer_jetson_and_pX4/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"PX4 \u76EE\u6807\u8DDF\u8E2A"})})]}),(0,n.jsx)("strong",{children:"NVIDIA Isaac"}),(0,n.jsxs)("div",{className:"card-container",children:[(0,n.jsx)("a",{href:"/cn/install_isaaclab/",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"Isaac Lab \u5B89\u88C5"})}),(0,n.jsxs)("a",{href:"/cn/training_soarm101_policy_with_isaacLab/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"SO Arm \u5F3A\u5316\u5B66\u4E60"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]}),(0,n.jsxs)("a",{href:"/cn/simulate_soarm101_by_leisaac/",className:"content-card",children:[(0,n.jsx)("span",{className:"text",children:"SO100 \u673A\u68B0\u81C2\u4E0E IsaacSim"}),(0,n.jsx)("span",{className:"tag recommended",children:"New"})]})]}),(0,n.jsx)("strong",{children:"VLA"}),(0,n.jsx)("div",{className:"card-container",children:(0,n.jsx)("a",{href:"/cn/control_robotic_arm_via_gr00t",className:"content-card",children:(0,n.jsx)("span",{className:"text",children:"StarAI \u4E0E NVIDIA GR00T"})})})]})})]})]}),(0,n.jsxs)("div",{className:"tab-content content-learning",children:[(0,n.jsxs)("div",{className:"learning-intro",children:[(0,n.jsx)("h2",{children:"\u{1F393} \u673A\u5668\u4EBA\u5B66\u9662"}),(0,n.jsx)("p",{children:"\u4ECE ROS \u57FA\u7840\u6982\u5FF5\u5230\u8FDB\u9636\u7684 Sim2Real \u5F3A\u5316\u5B66\u4E60\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u5FAA\u5E8F\u6E10\u8FDB\u7684\u7CFB\u7EDF\u5316\u8BFE\u7A0B\u3002"})]}),(0,n.jsx)("h3",{className:"course-section-title",children:"\u{1F4BB} \u6838\u5FC3\u8F6F\u4EF6\u4E0E\u4EFF\u771F"}),(0,n.jsxs)("div",{className:"course-grid",children:[(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-ros1",children:"ROS 1"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level beg",children:"\u5165\u95E8"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 8\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"ROS 1 \u57FA\u7840\u5165\u95E8\u53CADiy\u81EA\u5DF1\u7684\u79FB\u52A8\u673A\u5668\u4EBA"}),(0,n.jsx)("p",{children:"\u5B66\u4E60\u8282\u70B9\u3001\u8BDD\u9898\u3001\u670D\u52A1\u548C\u52A8\u4F5C\uFF0C\u4F7F\u7528 Python \u8FDB\u884C\u673A\u5668\u4EBA\u7F16\u7A0B\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-ros2",children:"ROS 2"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level int",children:"\u8FDB\u9636"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 4\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"ROS 2 \u57FA\u7840\u5165\u95E8"}),(0,n.jsx)("p",{children:"\u5B66\u4E60\u8282\u70B9\u3001\u8BDD\u9898\u3001\u670D\u52A1\u548C\u52A8\u4F5C\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-moveit",children:"MoveIt 1/2"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level beg",children:"\u673A\u68B0\u81C2\u5165\u95E8"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 6h"})]}),(0,n.jsx)("h3",{children:"MoveIt 1/2"}),(0,n.jsx)("p",{children:"\u5B66\u4E60Moveit 1/2 \u5BFC\u5165\u81EA\u5DF1\u7684\u673A\u68B0\u81C2\u5E76\u5B8C\u6210\u8FD0\u52A8\u5B66\u6B63\u9006\u89E3 "}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-pinocchio",children:"Pinocchio"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level int",children:"\u673A\u68B0\u81C2\u8FDB\u9636"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 6\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"\u5339\u8BFA\u66F9Pinocchio"}),(0,n.jsx)("p",{children:"\u5B66\u4E60\u5339\u8BFA\u66F9\u673A\u5668\u4EBA\u5B66\u6846\u67B6\uFF0C\u5F00\u53D1\u81EA\u5DF1\u673A\u68B0\u81C2\u7684\u8FD0\u52A8\u5B66\u53CA\u52A8\u529B\u5B66\u4EFB\u52A1"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-isaac",children:"ISAAC"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level adv",children:"\u9AD8\u7EA7"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 12\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"NVIDIA Isaac Sim & Lab"}),(0,n.jsx)("p",{children:"Sim2Real \u4EFF\u771F\u5230\u73B0\u5B9E\u5DE5\u4F5C\u6D41\uFF0CUSD \u7BA1\u9053\u4E0E\u73AF\u5883\u642D\u5EFA\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-mujoco",children:"MuJoCo"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level adv",children:"\u9AD8\u7EA7"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 10\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"MuJoCo \u7269\u7406\u5F15\u64CE"}),(0,n.jsx)("p",{children:"\u9762\u5411\u654F\u6377\u673A\u5668\u4EBA\u63A7\u5236\u7684\u9AD8\u7CBE\u5EA6\u52A8\u529B\u5B66\u5EFA\u6A21\u4E0E\u4EFF\u771F\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-rl",children:"RL"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level adv",children:"\u56F0\u96BE"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 20\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"\u673A\u5668\u4EBA\u5F3A\u5316\u5B66\u4E60"}),(0,n.jsx)("p",{children:"PPO \u7B97\u6CD5\u3001\u6DF1\u5EA6\u5F3A\u5316\u5B66\u4E60\u8BAD\u7EC3\u6D41\u7A0B\uFF0C\u4EE5\u53CA Jetson \u7AEF\u90E8\u7F72\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]})]}),(0,n.jsx)("h3",{className:"course-section-title",style:{marginTop:"3rem"},children:"\u{1F916} \u673A\u5668\u4EBA\u5E94\u7528\u5B9E\u6218"}),(0,n.jsxs)("div",{className:"course-grid",children:[(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-human",children:"\u4EBA\u5F62"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level beg",children:"\u5165\u95E8"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 5\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"\u5C0F\u5F62\u8235\u673A\u673A\u5668\u4EBA\u5165\u95E8\u8BFE\u7A0B"}),(0,n.jsx)("p",{children:"\u5C0F\u578B\u4EBA\u5F62\u673A\u5668\u4EBA\u786C\u4EF6\u9A71\u52A8\u3001\u52A8\u4F5C\u821E\u8E48\u7F16\u6392\u53CA\u4E8C\u6B21\u5F00\u53D1"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-lekiwi",children:"\u79FB\u52A8\u5E95\u76D8"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level beg",children:"\u5165\u95E8"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 6\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"\u79FB\u52A8\u673A\u5668\u4EBA\u5F00\u53D1 Lekiwi"}),(0,n.jsx)("p",{children:"\u57FA\u4E8E Lekiwi \u5E95\u76D8\u7684 SLAM \u5EFA\u56FE\u3001Nav2 \u5BFC\u822A\u4E0E\u81EA\u52A8\u5DE1\u903B\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-arm",children:"\u673A\u68B0\u81C2"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level int",children:"\u8FDB\u9636"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 15\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"StarAi \u673A\u68B0\u81C2\u7CFB\u7EDF\u8BFE\u7A0B"}),(0,n.jsx)("p",{children:"StarAI 6+1\u81EA\u7531\u5EA6\u673A\u68B0\u81C2\u8FD0\u52A8\u5B66\u3001\u52A8\u529B\u5B66\u5230\u6A21\u4EFF\u5B66\u4E60\u548C\u5F3A\u5316\u5B66\u4E60VLA\u8FDB\u9636 "}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-legged",children:"\u8F6E\u8DB3\u673A\u5668\u4EBA"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level int",children:"\u8FDB\u9636"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 8\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"StackForce \u8F6E\u8DB3\u673A\u5668\u4EBA\u7CFB\u7EDF\u8BFE\u7A0B"}),(0,n.jsx)("p",{children:"\u8F6E\u8DB3\u673A\u5668\u4EBA\u7684LQR\u5E73\u8861\u63A7\u5236\u7B97\u6CD5\u4E0E\u8FD0\u52A8\u89C4\u5212\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]}),(0,n.jsxs)("a",{href:"",className:"course-card",children:[(0,n.jsx)("div",{className:"course-cover c-reachy",children:"\u684C\u9762\u673A\u5668\u4EBA"}),(0,n.jsxs)("div",{className:"course-info",children:[(0,n.jsxs)("div",{className:"course-meta",children:[(0,n.jsx)("span",{className:"level adv",children:"\u9AD8\u7EA7"})," ",(0,n.jsx)("span",{children:"\u23F1\uFE0F 8\u5C0F\u65F6"})]}),(0,n.jsx)("h3",{children:"ReachyMini \u7CFB\u7EDF\u8BFE\u7A0B"}),(0,n.jsx)("p",{children:"ReachyMini \u57FA\u672C\u4F7F\u7528\u3001\u63A5\u53E3\u6559\u7A0B\u53CA\u4E8C\u6B21\u5F00\u53D1\u7CFB\u7EDF\u8BFE\u7A0B\u3002"}),(0,n.jsx)("span",{className:"btn-start",children:"\u8BA1\u5212\u4E2D"})]})]})]})]})]}),"\n",(0,n.jsx)("style",{children:`
/* =========================================
 1. Tab Logic (CSS Only)
 ========================================= */
.robotic-tab-container { width: 100%; position: relative; }
.tab-input-hidden { display: none; }
.tab-nav-wrapper { display: flex; justify-content: center; margin-bottom: 2rem; margin-top: 1rem; }
.tab-nav {
position: relative; display: flex; background: #f1f3f5; border-radius: 100px;
padding: 5px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); user-select: none;
}
.tab-item {
position: relative; z-index: 2; padding: 10px 30px; font-weight: 600; color: #666;
cursor: pointer; transition: color 0.3s ease; display: flex; align-items: center; gap: 8px; font-size: 1rem; margin: 0;
}
.tab-item .icon { font-size: 1.2rem; }
.badge {
background: #ff4757; color: white; font-size: 0.6rem; padding: 2px 6px;
border-radius: 10px; margin-left: 5px; position: relative; top: -1px;
}
.tab-slider {
position: absolute; top: 5px; bottom: 5px; left: 5px; width: calc(50% - 5px);
background: white; border-radius: 100px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1); z-index: 1;
}

#tab-hardware:checked ~ .tab-nav-wrapper .tab-nav .tab-slider { transform: translateX(0); }
#tab-hardware:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-hardware"] { color: #4a90e2; }
#tab-learning:checked ~ .tab-nav-wrapper .tab-nav .tab-slider { transform: translateX(100%); }
#tab-learning:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-learning"] { color: #7b61ff; }

.tab-content { display: none; animation: fadeIn 0.4s ease; }
#tab-hardware:checked ~ .content-hardware { display: block; }
#tab-learning:checked ~ .content-learning { display: block; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

/* =========================================
 2. Hardware Styles (Original)
 ========================================= */
.quick-nav-container {
margin: 2rem 0; padding: 1rem;
background: radial-gradient(at 10% 20%, #f0fdf4 0%, transparent 50%), radial-gradient(at 90% 80%, #f0f7ff 0%, transparent 50%), white;
border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: none;
}
.quick-nav { display: flex; justify-content: space-around; gap: 1rem; }
.nav-item {
position: relative; padding: 0.8rem 1.5rem; border-radius: 12px; display: flex; margin: 6px 6px;
flex-direction: column; align-items: center; text-decoration: none !important; color: #333;
font-weight: 500; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); background: white;
box-shadow: 0 2px 4px rgba(0,0,0,0.05); z-index: 1; width: 100%;
}
.nav-item .icon { font-size: 1.8rem; margin-bottom: 0.5rem; transition: transform 0.3s; }
.nav-item .text { font-size: 0.95rem; white-space: nowrap; }
.nav-item .hover-effect {
position: absolute; bottom: 0; left: 0; width: 100%; height: 0;
background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
border-radius: 12px; transition: height 0.3s ease; z-index: -1;
}
.nav-item:hover { transform: translateY(-3px); box-shadow: 0 6px 12px rgba(0,0,0,0.1); color: white; }
.nav-item:hover .icon { transform: scale(1.2) rotate(10deg); }
.nav-item:hover .hover-effect { height: 100%; }

.nav-grid { display: block; gap: 2rem; margin-top: 2rem; }
.category-group { margin-bottom: 2.5rem; }
.category-card {
position: relative; padding: 1.8rem; border-radius: 16px; background: white;
box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: all 0.3s ease; overflow: hidden; border: 1px solid transparent;
}
.category-card::before { content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%; }
.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

.card-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin-top: 12px; margin-bottom: 1.5rem; }
.content-card {
display: flex; align-items: center; justify-content: space-between; padding: 10px 16px;
background: #f9fafb; border: 1px solid transparent; border-radius: 8px; text-decoration: none !important;
color: var(--ifm-font-color-base); font-weight: 500; font-size: 0.9rem; transition: all 0.25s ease; position: relative; overflow: hidden;
}
.content-card .text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-right: 8px; z-index: 2; }
.content-card:hover {
background: #fff; border-color: #4a90e2; box-shadow: 0 4px 12px rgba(74, 144, 226, 0.15);
transform: translateY(-2px); color: #4a90e2;
}
.content-card::after { content: ""; position: absolute; top: 0; left: 0; width: 0; height: 100%; background: #4a90e2; transition: width 0.2s ease; }
.content-card:hover::after { width: 4px; }

.tag { font-size: 0.7rem; padding: 2px 8px; border-radius: 12px; font-weight: 700; text-transform: uppercase; flex-shrink: 0; z-index: 2; }
.recommended { background: rgba(255, 107, 107, 0.1); color: #ff6b6b; border: 1px solid rgba(255, 107, 107, 0.2); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.2); } 70% { box-shadow: 0 0 0 4px rgba(255, 107, 107, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); } }

/* =========================================
 3. Learning Styles
 ========================================= */
.learning-intro { text-align: center; margin-bottom: 2rem; }
.learning-intro h2 { margin-bottom: 0.5rem; background: -webkit-linear-gradient(45deg, #7b61ff, #4a90e2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.learning-intro p { color: #666; max-width: 600px; margin: 0 auto; }

.course-section-title {
margin: 1.5rem 0 1rem; font-size: 1.2rem; font-weight: 700; color: #444; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;
}

.course-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
.course-card {
background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);
text-decoration: none !important; transition: transform 0.3s, box-shadow 0.3s; border: 1px solid #eee; display: flex; flex-direction: column;
}
.course-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }

/* Covers for different topics */
.course-cover { height: 100px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 800; color: white; letter-spacing: 1px; }

/* AI & Software Colors */
.c-ros2 { background: linear-gradient(135deg, #10b981, #059669); }
.c-ros1 { background: linear-gradient(135deg, #4b5563, #374151); }
.c-moveit { background: linear-gradient(135deg, #f90306, #ea000c); }
.c-pinocchio { background: linear-gradient(135deg, #3b82f6, #fa000c); }
.c-isaac { background: linear-gradient(135deg, #76b900, #366e00); }
.c-rl { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
.c-mujoco { background: linear-gradient(135deg, #f97316, #ea580c); }

/* Robot Platform Colors */
.c-arm { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.c-legged { background: linear-gradient(135deg, #eab308, #ca8a04); }
.c-human { background: linear-gradient(135deg, #ec4899, #db2777); }
.c-reachy { background: linear-gradient(135deg, #14b8a6, #0d9488); }
.c-lekiwi { background: linear-gradient(135deg, #06b6d4, #0891b2); }
.c-gray { background: #eee; color: #aaa; }

.course-info { padding: 1rem; flex-grow: 1; display: flex; flex-direction: column; }
.course-meta { display: flex; justify-content: space-between; font-size: 0.75rem; color: #888; margin-bottom: 0.5rem; }
.level { font-weight: 700; text-transform: uppercase; }
.beg { color: #059669; } .int { color: #d97706; } .adv { color: #dc2626; }

.course-info h3 { font-size: 1.1rem; margin: 0 0 0.5rem 0; color: #1f2937; line-height: 1.3; }
.course-info p { font-size: 0.85rem; color: #666; line-height: 1.5; margin-bottom: 1.5rem; flex-grow: 1; }

.btn-start {
display: block; text-align: center; padding: 8px 0; background: #f0f7ff; color: #4a90e2; font-weight: 600; font-size: 0.9rem; border-radius: 8px; transition: background 0.2s;
}
.course-card:hover .btn-start { background: #4a90e2; color: white; }

/* =========================================
 4. Dark Mode \u{9002}\u{914D}
 ========================================= */
html[data-theme='dark'] .tab-nav { background: #2f2f32; box-shadow: none; }
html[data-theme='dark'] .tab-slider { background: #444; }
html[data-theme='dark'] .tab-item { color: #aaa; }
html[data-theme='dark'] #tab-hardware:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-hardware"] { color: #60a5fa; }
html[data-theme='dark'] #tab-learning:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-learning"] { color: #a78bfa; }

/* Hardware Dark Mode */
html[data-theme='dark'] .quick-nav-container { background: linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: none; }
html[data-theme='dark'] .nav-item { color: #e5e7eb; background: rgb(47, 50, 57); box-shadow: 0 2px 4px rgba(0,0,0,0.4); }
html[data-theme='dark'] .category-card { background: #1b1b1d; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border-color: #303033; }
html[data-theme='dark'] .content-card { background: #242526; color: #e5e7eb; border-color: #303033; }
html[data-theme='dark'] .content-card:hover { background: #2f2f32; border-color: #60a5fa; color: #60a5fa; }
html[data-theme='dark'] .content-card::after { background: #60a5fa; }
html[data-theme='dark'] .recommended { background: rgba(255, 107, 107, 0.15); color: #ff8e8e; border-color: rgba(255, 142, 142, 0.3); }
html[data-theme='dark'] h2, html[data-theme='dark'] h3 { color: #f9fafb; }

/* Learning Dark Mode */
html[data-theme='dark'] .course-card { background: #1b1b1d; border-color: #303033; }
html[data-theme='dark'] .course-info h3 { color: #f3f4f6; }
html[data-theme='dark'] .course-info p { color: #9ca3af; }
html[data-theme='dark'] .btn-start { background: #2f2f32; color: #60a5fa; }
html[data-theme='dark'] .course-card:hover .btn-start { background: #60a5fa; color: white; }
html[data-theme='dark'] .learning-section-title { color: #ccc; border-bottom-color: #444; }

@media (max-width: 768px) {
.quick-nav { flex-direction: column; gap: 0.5rem; }
.nav-item { flex-direction: row; justify-content: start; padding: 0.8rem 1rem; }
.nav-item .icon { margin-bottom: 0; margin-right: 0.8rem; }
.card-container, .course-grid { grid-template-columns: 1fr; }
.category-card { padding: 1.2rem; }
.tab-nav { width: 100%; }
.tab-item { padding: 10px 15px; font-size: 0.9rem; flex: 1; justify-content: center; }
}
`})]})}function h(e={}){let{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453(e,a,s){s.d(a,{R:()=>t,x:()=>i});var r=s(296540);let n={},c=r.createContext(n);function t(e){let a=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(c.Provider,{value:a},e.children)}}}]);