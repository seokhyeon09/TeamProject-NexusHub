import React from 'react';
import './Dashboard.scss';

export default function Dashboard() {
  // Chart Data Mock
  const chartData = [
    { time: '06시', in: 40, out: 40 },
    { time: '08시', in: 65, out: 65 },
    { time: '10시', in: 85, out: 85 },
    { time: '12시', in: 75, out: 75 },
    { time: '14시', in: 55, out: 55 },
    { time: '16시', in: 45, out: 45 },
    { time: '18시', in: 30, out: 30 },
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="title-wrap">
            <h2>통합 가동률 및 물동량</h2>
            <span className="subtitle">Operations Dashboard</span>
          </div>
          <p className="update-time">2026년 6월 24일 (수) 기준 · 실시간 갱신</p>
        </div>
        <div className="header-right">
          <button className="btn-outline">기간 변경</button>
          <button className="btn-primary">리포트 다운로드</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="dashboard-kpi-cards">
        <div className="kpi-card">
          <div className="kpi-title">오늘 입고 물량</div>
          <div className="kpi-value">1,284<span>건</span></div>
          <div className="kpi-diff positive">전일 대비 +5.2%</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-title">오늘 출고 물량</div>
          <div className="kpi-value">1,142<span>건</span></div>
          <div className="kpi-diff positive">전일 대비 +3.8%</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-title">터미널 도크 가동률</div>
          <div className="kpi-value">82<span>%</span></div>
          <div className="kpi-diff negative">전일 대비 -4.0%p</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-title">미출고 잔류 화물</div>
          <div className="kpi-value">46<span>건</span></div>
          <div className="kpi-diff negative">전일 대비 +12건</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-title">예외(파손/분실) 화물</div>
          <div className="kpi-value">3<span>건</span></div>
          <div className="kpi-diff positive">전일 대비 -2건</div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="dashboard-middle-row">
        {/* Chart */}
        <div className="dash-card chart-card">
          <div className="card-title">
            시간대별 입고/출고 물동량
            <span className="link-text">상세 보기</span>
          </div>
          <div className="chart-container">
            {chartData.map((d, i) => (
              <div className="bar-group" key={i}>
                <div className="bar incoming" style={{ height: `${d.in}%` }}></div>
                <div className="bar outgoing" style={{ height: `${d.out}%` }}></div>
                <div className="x-label">{d.time}</div>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            <div className="legend-item"><div className="box incoming"></div>입고(상차)</div>
            <div className="legend-item"><div className="box outgoing"></div>출고(하차)</div>
          </div>
        </div>

        {/* Dock Status */}
        <div className="dash-card progress-card">
          <div className="card-title">터미널 도크 가동 현황</div>
          <div className="progress-list">
            <div className="progress-item">
              <div className="p-header">
                <div>
                  <h4>입고 도크 (간선 11톤)</h4>
                  <span>전체 6면 중 5면 가동</span>
                </div>
              </div>
              <div className="p-bar-bg"><div className="p-bar-fill blue" style={{ width: '83%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="p-header">
                <div>
                  <h4>출고 도크 (1톤 택배차)</h4>
                  <span>전체 10면 중 7면 가동</span>
                </div>
              </div>
              <div className="p-bar-bg"><div className="p-bar-fill green" style={{ width: '70%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="p-header">
                <div>
                  <h4>분류 컨베이어(소터)</h4>
                  <span>정상 가동 중</span>
                </div>
              </div>
              <div className="p-bar-bg"><div className="p-bar-fill yellow" style={{ width: '100%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="p-header">
                <div>
                  <h4>사고 화물 임시 창고</h4>
                  <span>적재율 낮음</span>
                </div>
              </div>
              <div className="p-bar-bg"><div className="p-bar-fill red" style={{ width: '20%' }}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="dashboard-bottom-row">
        {/* Delivery Progress */}
        <div className="dash-card list-card">
          <div className="card-title">구역별 배송 진행률</div>
          <div className="data-list">
            <div className="list-item">
              <div className="item-left"><h4>진접읍</h4></div>
              <div className="item-right"><span className="pill green">● 91% 완료</span></div>
            </div>
            <div className="list-item">
              <div className="item-left"><h4>오남읍</h4></div>
              <div className="item-right"><span className="pill yellow">● 64% 완료</span></div>
            </div>
            <div className="list-item">
              <div className="item-left"><h4>별내동</h4></div>
              <div className="item-right"><span className="pill yellow">● 58% 완료</span></div>
            </div>
            <div className="list-item">
              <div className="item-left"><h4>퇴계원읍</h4></div>
              <div className="item-right"><span className="pill red">● 22% 완료</span></div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="dash-card list-card">
          <div className="card-title">금일 주요 알림</div>
          <div className="data-list">
            <div className="list-item">
              <div className="item-left">
                <h4>퇴계원읍 담당 기사 결원</h4>
                <p>09:10 · 대타 배정 필요</p>
              </div>
            </div>
            <div className="list-item">
              <div className="item-left">
                <h4>A-04 도크 컨베이어 점검</h4>
                <p>08:45 · 점검 완료</p>
              </div>
            </div>
            <div className="list-item">
              <div className="item-left">
                <h4>파손 화물 1건 접수</h4>
                <p>08:02 · CS 처리반 확인 중</p>
              </div>
            </div>
            <div className="list-item">
              <div className="item-left">
                <h4>신규 집화 요청 12건</h4>
                <p>07:30 · 수거 기사 배정 대기</p>
              </div>
            </div>
          </div>
        </div>

        {/* Manpower */}
        <div className="dash-card list-card">
          <div className="card-title">현장 인력 현황</div>
          <div className="data-list">
            <div className="list-item">
              <div className="item-left"><h4>출근 인원</h4></div>
              <div className="item-right">38명</div>
            </div>
            <div className="list-item">
              <div className="item-left"><h4>결근/지각</h4></div>
              <div className="item-right red">2명</div>
            </div>
            <div className="list-item">
              <div className="item-left"><h4>금일 배정 기사</h4></div>
              <div className="item-right">24명</div>
            </div>
            <div className="list-item">
              <div className="item-left"><h4>대타 배정 대기</h4></div>
              <div className="item-right red">1명</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
