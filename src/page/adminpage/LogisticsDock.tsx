import React from 'react';
import './LogisticsDock.scss';

export default function LogisticsDock() {
  return (
    <div className="dock-page admin-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="title-wrap">
            <h2>입/출고 도크 현황</h2>
            <span className="subtitle">Dock Status Monitor</span>
          </div>
          <p className="update-time">2026년 6월 24일 (수) 기준 · 실시간 갱신</p>
        </div>
        <div className="header-right">
          <button className="btn-outline">도크 배치도 보기</button>
          <button className="btn-primary">접안 일정 등록</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="dock-summary-cards">
        <div className="summary-card">
          <div className="card-title">입고 도크 가동</div>
          <div className="card-value text-blue">5<span>/ 6면</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">출고 도크 가동</div>
          <div className="card-value text-green">7<span>/ 10면</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">대기 중인 간선 트럭</div>
          <div className="card-value text-yellow">2<span>대</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">대기 중인 1톤 택배차</div>
          <div className="card-value text-yellow">3<span>대</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">점검/이상 도크</div>
          <div className="card-value text-red">1<span>면</span></div>
        </div>
      </div>

      {/* Incoming Dock Grid */}
      <div className="section-title">입고 도크 ㅡ 간선 11톤 트럭 (하차)</div>
      <div className="incoming-dock-grid">
        <div className="dock-card status-blue">
          <h3>A-01 도크</h3>
          <div className="status-text">접안 중 · 하차 진행</div>
          <div className="details">
            차량번호 경기 78아 1234<br/>
            하차율 64% · 예상완료 09:55
          </div>
        </div>
        
        <div className="dock-card status-blue">
          <h3>A-02 도크</h3>
          <div className="status-text">접안 중 · 하차 진행</div>
          <div className="details">
            차량번호 경기 80나 5521<br/>
            하차율 88% · 예상완료 09:40
          </div>
        </div>

        <div className="dock-card status-green">
          <h3>A-03 도크</h3>
          <div className="status-text">하차 완료</div>
          <div className="details">
            차량번호 경기 12다 9087<br/>
            완료 09:12 · 출차 대기
          </div>
        </div>

        <div className="dock-card status-red">
          <h3>A-04 도크</h3>
          <div className="status-text">점검 중</div>
          <div className="details">
            컨베이어 연동 점검<br/>
            예상 복구 10:30
          </div>
        </div>

        <div className="dock-card status-blue">
          <h3>A-05 도크</h3>
          <div className="status-text">접안 중 · 하차 진행</div>
          <div className="details">
            차량번호 경기 33라 4410<br/>
            하차율 30% · 예상완료 10:20
          </div>
        </div>

        <div className="dock-card status-gray">
          <h3>A-06 도크</h3>
          <div className="status-text">공석</div>
          <div className="details">
            다음 접안 차량 대기 중<br/>
            예상 접안 10:05
          </div>
        </div>
      </div>

      {/* Outgoing Dock Table */}
      <div className="section-title">출고 도크 ㅡ 1톤 택배차 (상차)</div>
      <div className="outgoing-dock-table">
        <table>
          <thead>
            <tr>
              <th>도크 번호</th>
              <th>담당 기사</th>
              <th>배송 구역</th>
              <th>접안 시간</th>
              <th>상차 진행률</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B-01</td>
              <td>김철수</td>
              <td>진접1구역</td>
              <td>08:40</td>
              <td>
                <div className="progress-bar-bg"><div className="progress-bar-fill green" style={{ width: '100%' }}></div></div>
              </td>
              <td><span className="pill green">상차완료</span></td>
              <td><button className="action-btn">출차 처리</button></td>
            </tr>
            <tr>
              <td>B-02</td>
              <td>이영희</td>
              <td>오남2구역</td>
              <td>08:45</td>
              <td>
                <div className="progress-bar-bg"><div className="progress-bar-fill blue" style={{ width: '60%' }}></div></div>
              </td>
              <td><span className="pill yellow">상차중</span></td>
              <td><button className="action-btn">상세 보기</button></td>
            </tr>
            <tr>
              <td>B-03</td>
              <td>박지민</td>
              <td>별내3구역</td>
              <td>08:50</td>
              <td>
                <div className="progress-bar-bg"><div className="progress-bar-fill blue" style={{ width: '30%' }}></div></div>
              </td>
              <td><span className="pill yellow">상차중</span></td>
              <td><button className="action-btn">상세 보기</button></td>
            </tr>
            <tr>
              <td>B-04</td>
              <td className="text-red">미배정 (결원)</td>
              <td>퇴계원읍</td>
              <td>-</td>
              <td>
                <div className="progress-bar-bg"></div>
              </td>
              <td><span className="pill red">대기</span></td>
              <td><button className="action-btn btn-blue">기사 배정</button></td>
            </tr>
            <tr>
              <td>B-05</td>
              <td>정수민</td>
              <td>진접2구역</td>
              <td>07:05</td>
              <td>
                <div className="progress-bar-bg"><div className="progress-bar-fill green" style={{ width: '100%' }}></div></div>
              </td>
              <td><span className="pill green">출차완료</span></td>
              <td><button className="action-btn">기록 보기</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="footer-info">
        도크 카드의 색상은 접안 상태를 의미합니다. 파란 배경은 작업 진행 중, 빨간 배경은 점검/이상 상태, 회색 배경은 공석입니다.
      </div>
    </div>
  );
}
