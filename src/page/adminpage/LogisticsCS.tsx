import React from 'react';
import './LogisticsCS.scss';

export default function LogisticsCS() {
  return (
    <div className="cs-page admin-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="title-wrap">
            <h2>예외 화물 및 CS 처리반</h2>
            <span className="subtitle">Exception & CS Handling</span>
          </div>
          <p className="update-time">2026년 6월 24일 (수) 기준 · 홈페이지 보상접수와 실시간 연동</p>
        </div>
        <div className="header-right">
          <button className="btn-outline-gray">처리 이력 다운로드</button>
          <button className="btn-primary">예외 화물 직접 등록</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="cs-summary-cards">
        <div className="summary-card">
          <div className="card-title">전체 예외 화물</div>
          <div className="card-value">9<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">파손 접수</div>
          <div className="card-value text-red">5<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">분실 접수</div>
          <div className="card-value text-yellow">2<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">보상 처리 완료</div>
          <div className="card-value text-green">4<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">고객 응답 대기</div>
          <div className="card-value text-blue">3<span>건</span></div>
        </div>
      </div>

      {/* Text Tabs */}
      <div className="text-tabs">
        <div className="tab-item active">전체 (9)</div>
        <div className="tab-item">파손 (5)</div>
        <div className="tab-item">분실 (2)</div>
        <div className="tab-item">처리완료 (4)</div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-groups">
          <div className="filter-group">
            <span className="group-label">접수 경로</span>
            <button className="filter-btn active">전체</button>
            <button className="filter-btn">홈페이지 자동연동</button>
            <button className="filter-btn">현장 직접 등록</button>
          </div>
        </div>
        <div className="search-box">
          <span className="search-label">검색</span>
          <input type="text" placeholder="운송장 번호 또는 고객명으로 검색" />
        </div>
      </div>

      {/* Data Table */}
      <div className="cs-table">
        <table>
          <thead>
            <tr>
              <th>운송장 번호</th>
              <th>예외 유형</th>
              <th>접수 경로</th>
              <th>고객명 / 연락처</th>
              <th>접수 시간</th>
              <th>처리 상태</th>
              <th>관리 액션</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#" className="tracking-num">5839-1029-003</a></td>
              <td><span className="pill red">파손</span></td>
              <td>
                <span className="main-text">홈페이지 연동</span>
                <span className="sub-text">파손/분실 보상 접수</span>
              </td>
              <td>
                <span className="main-text">최은서</span>
                <span className="sub-text">010-22**-99**</span>
              </td>
              <td>08:02:14</td>
              <td><span className="pill yellow">확인중</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-outline-green">보상 승인</button>
                  <button className="btn-outline-gray">고객 회신</button>
                  <button className="btn-outline-red">반려</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-0988-117</a></td>
              <td><span className="pill red">파손</span></td>
              <td>
                <span className="main-text">현장 직접 등록</span>
                <span className="sub-text">레일 상 파손 발생</span>
              </td>
              <td>
                <span className="main-text">한지우</span>
                <span className="sub-text">010-33**-21**</span>
              </td>
              <td>07:48:02</td>
              <td><span className="pill blue">창고 보관중</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-outline-green">보상 승인</button>
                  <button className="btn-outline-gray">고객 회신</button>
                  <button className="btn-outline-red">반려</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-0975-042</a></td>
              <td><span className="pill purple">분실</span></td>
              <td>
                <span className="main-text">홈페이지 연동</span>
                <span className="sub-text">파손/분실 보상 접수</span>
              </td>
              <td>
                <span className="main-text">오태양</span>
                <span className="sub-text">010-45**-88**</span>
              </td>
              <td>07:30:55</td>
              <td><span className="pill yellow">위치 추적중</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-outline-green">보상 승인</button>
                  <button className="btn-outline-gray">고객 회신</button>
                  <button className="btn-outline-red">반려</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-0961-209</a></td>
              <td><span className="pill red">파손</span></td>
              <td>
                <span className="main-text">현장 직접 등록</span>
                <span className="sub-text">상하차 중 박스 파손</span>
              </td>
              <td>
                <span className="main-text">서윤아</span>
                <span className="sub-text">010-19**-44**</span>
              </td>
              <td>06:55:30</td>
              <td><span className="pill green">보상완료</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-outline-gray">상세 보기</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-0942-330</a></td>
              <td><span className="pill purple">분실</span></td>
              <td>
                <span className="main-text">홈페이지 연동</span>
                <span className="sub-text">파손/분실 보상 접수</span>
              </td>
              <td>
                <span className="main-text">강도윤</span>
                <span className="sub-text">010-77**-12**</span>
              </td>
              <td>06:40:11</td>
              <td><span className="pill green">보상완료</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-outline-gray">상세 보기</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-wrap">
        <div className="page-info">전체 9건 중 1-5건 표시</div>
        <div className="page-numbers">
          <button className="active">1</button>
          <button>2</button>
          <button>&gt;</button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="footer-info">
        이 목록은 홈페이지의 [파손/분실 보상 접수] 게시판과 실시간으로 연동됩니다. [분류 및 상하차 통제] 화면에서 [파손/보류 처리]된 화물은 자동으로 이 목록에 추가됩니다.
      </div>
    </div>
  );
}
