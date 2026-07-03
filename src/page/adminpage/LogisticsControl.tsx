import React from 'react';
import './LogisticsControl.scss';

export default function LogisticsControl() {
  return (
    <div className="control-page admin-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="title-wrap">
            <h2>분류 및 상하차 통제</h2>
            <span className="subtitle">Sorting & Loading Control</span>
          </div>
          <p className="update-time">2026년 6월 24일 (수) 기준 · 실시간 갱신</p>
        </div>
        <div className="header-right">
          <button className="btn-outline-red">잔류 화물(미출고) 일괄 보고</button>
          <button className="btn-primary">미인식 화물 수동 등록</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="control-summary-cards">
        <div className="summary-card">
          <div className="card-title">오늘 전체 화물</div>
          <div className="card-value">1,284<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">하차완료</div>
          <div className="card-value text-blue">312<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">분류중</div>
          <div className="card-value text-yellow">428<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">상차완료</div>
          <div className="card-value text-green">498<span>건</span></div>
        </div>
        <div className="summary-card">
          <div className="card-title">미출고</div>
          <div className="card-value text-red">46<span>건</span></div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-groups">
          <div className="filter-group">
            <span className="group-label">상태</span>
            <button className="filter-btn active">전체</button>
            <button className="filter-btn">하차완료</button>
            <button className="filter-btn">분류중</button>
            <button className="filter-btn">상차완료</button>
            <button className="filter-btn">미출고</button>
          </div>
          <div className="filter-group">
            <span className="group-label">구역</span>
            <button className="filter-btn active">전체 구역</button>
            <button className="filter-btn">진접읍</button>
            <button className="filter-btn">오남읍</button>
            <button className="filter-btn">별내동</button>
            <button className="filter-btn">퇴계원읍</button>
          </div>
        </div>
        <div className="search-box">
          <span className="search-label">검색</span>
          <input type="text" placeholder="운송장 번호로 검색 (예: 5839-1029-0)" />
        </div>
      </div>

      {/* Data Table */}
      <div className="control-table">
        <table>
          <thead>
            <tr>
              <th>운송장 번호</th>
              <th>배송 목적지</th>
              <th>배정된 택배기사</th>
              <th>스캔 시간</th>
              <th>상하차 상태</th>
              <th>관리 액션</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#" className="tracking-num">5839-1029-001</a></td>
              <td>
                <span className="main-text">진접읍 장현리</span>
                <span className="sub-text">간선11톤 A-03 도크 하차분</span>
              </td>
              <td>
                <span className="main-text">김철수</span>
                <span className="sub-text">진접1구역</span>
              </td>
              <td>06:15:30</td>
              <td><span className="pill green">상차완료</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-light-blue">기사 재배정/구역 변경</button>
                  <button className="btn-light-red">파손/보류 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-1029-002</a></td>
              <td>
                <span className="main-text">오남읍 오남리</span>
                <span className="sub-text">간선11톤 A-03 도크 하차분</span>
              </td>
              <td>
                <span className="main-text">이영희</span>
                <span className="sub-text">오남2구역</span>
              </td>
              <td>06:20:12</td>
              <td><span className="pill yellow">분류중</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-light-blue">기사 재배정/구역 변경</button>
                  <button className="btn-light-red">파손/보류 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-1029-003</a></td>
              <td>
                <span className="main-text">별내동 (아파트)</span>
                <span className="sub-text">간선11톤 A-04 도크 하차분</span>
              </td>
              <td>
                <span className="main-text">박지민</span>
                <span className="sub-text">별내3구역</span>
              </td>
              <td>06:25:00</td>
              <td><span className="pill blue">하차완료</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-light-blue">기사 재배정/구역 변경</button>
                  <button className="btn-light-red">파손/보류 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-1029-004</a></td>
              <td>
                <span className="main-text">퇴계원읍</span>
                <span className="sub-text">간선11톤 A-04 도크 하차분</span>
              </td>
              <td className="text-red">
                <span className="main-text">미배정 (결원)</span>
              </td>
              <td>06:30:45</td>
              <td><span className="pill red">미출고</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-light-blue">기사 재배정/구역 변경</button>
                  <button className="btn-light-red">파손/보류 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-1029-005</a></td>
              <td>
                <span className="main-text">진접읍 부평리</span>
                <span className="sub-text">간선11톤 A-05 도크 하차분</span>
              </td>
              <td>
                <span className="main-text">김철수</span>
                <span className="sub-text">진접1구역</span>
              </td>
              <td>06:33:18</td>
              <td><span className="pill yellow">분류중</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-light-blue">기사 재배정/구역 변경</button>
                  <button className="btn-light-red">파손/보류 처리</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><a href="#" className="tracking-num">5839-1029-006</a></td>
              <td>
                <span className="main-text">오남읍 양지리</span>
                <span className="sub-text">간선11톤 A-05 도크 하차분</span>
              </td>
              <td>
                <span className="main-text">이영희</span>
                <span className="sub-text">오남2구역</span>
              </td>
              <td>06:35:51</td>
              <td><span className="pill green">상차완료</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-light-blue">기사 재배정/구역 변경</button>
                  <button className="btn-light-red">파손/보류 처리</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-wrap">
        <div className="page-info">전체 1,284건 중 1-6건 표시</div>
        <div className="page-numbers">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button className="dots">...</button>
          <button>214</button>
          <button>&gt;</button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="footer-info">
        [파손/보류 처리] 클릭 시 상태가 즉시 '보류'로 변경되며 좌측 메뉴 예외 화물 및 CS 처리반 리스트로 자동 이동합니다. [기사 재배정/구역 변경] 클릭 시 변경할 택배 기사 선택 팝업이 열립니다.
      </div>
    </div>
  );
}
