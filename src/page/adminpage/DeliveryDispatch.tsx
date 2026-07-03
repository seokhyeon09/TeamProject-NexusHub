import './DeliveryDispatch.scss';

export default function DeliveryDispatch() {
  return (
    <div className="delivery-dispatch-page">
      <div className="page-header">
        <div className="header-titles">
          <div className="title-row">
            <h2>택배기사 배차 및 배송 구역 관리</h2>
            <span className="subtitle">Driver Assignment & Zone Management</span>
          </div>
          <p className="description">남양주 관할 구역 (진접, 오남, 별내, 퇴계원 등) 기준</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">구역 지도 보기</button>
          <button className="btn-primary">대타 기사 배정</button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <span className="stat-label">전체 배정 구역</span>
          <div className="stat-value"><strong>12</strong>개</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">정상 운행 기사</span>
          <div className="stat-value text-green"><strong>22</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">결원 발생 구역</span>
          <div className="stat-value text-red"><strong>1</strong>개</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">대타 배정 완료</span>
          <div className="stat-value text-blue"><strong>0</strong>건</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">평균 배송 진척률</span>
          <div className="stat-value text-orange"><strong>59</strong>%</div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-label">구역</span>
          <div className="filter-buttons">
            <button className="filter-btn active">전체 구역</button>
            <button className="filter-btn">진접읍</button>
            <button className="filter-btn">오남읍</button>
            <button className="filter-btn">별내동</button>
            <button className="filter-btn">퇴계원읍</button>
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">상태</span>
          <div className="filter-buttons">
            <button className="filter-btn active">전체</button>
            <button className="filter-btn">정상 운행</button>
            <button className="filter-btn">결원</button>
          </div>
        </div>
        <div className="search-box">
          <span className="search-label">검색</span>
          <input type="text" placeholder="기사명으로 검색" />
        </div>
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>담당 구역</th>
              <th>배정 기사</th>
              <th>배차 차량</th>
              <th>배정 물량</th>
              <th>배송 진척률</th>
              <th>상태</th>
              <th>관리 액션</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>진접1구역</strong>
                <span className="sub-text">장현리, 부평리</span>
              </td>
              <td>김철수</td>
              <td>12바 3301</td>
              <td>118건</td>
              <td>
                <div className="progress-bar">
                  <div className="progress-fill green" style={{ width: '90%' }}></div>
                </div>
              </td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 정상 운행
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">구역 변경</button>
                  <button className="btn-action">상세 보기</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>오남2구역</strong>
                <span className="sub-text">오남리, 양지리</span>
              </td>
              <td>이영희</td>
              <td>34다 1190</td>
              <td>96건</td>
              <td>
                <div className="progress-bar">
                  <div className="progress-fill blue" style={{ width: '60%' }}></div>
                </div>
              </td>
              <td>
                <span className="status-badge yellow">
                  <span className="dot"></span> 정상 운행
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">구역 변경</button>
                  <button className="btn-action">상세 보기</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>별내3구역</strong>
                <span className="sub-text">별내동 아파트 단지</span>
              </td>
              <td>박지민</td>
              <td>56가 7720</td>
              <td>104건</td>
              <td>
                <div className="progress-bar">
                  <div className="progress-fill blue" style={{ width: '50%' }}></div>
                </div>
              </td>
              <td>
                <span className="status-badge yellow">
                  <span className="dot"></span> 정상 운행
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">구역 변경</button>
                  <button className="btn-action">상세 보기</button>
                </div>
              </td>
            </tr>
            <tr className="row-alert">
              <td>
                <strong>퇴계원1구역</strong>
                <span className="sub-text">퇴계원읍 전역</span>
              </td>
              <td className="text-red font-bold">미배정 (결원)</td>
              <td>-</td>
              <td>82건</td>
              <td>
                <div className="progress-bar">
                  <div className="progress-fill grey" style={{ width: '0%' }}></div>
                </div>
              </td>
              <td>
                <span className="status-badge red">
                  <span className="dot"></span> 결원
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action primary-light">대타 기사 배정</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>진접2구역</strong>
                <span className="sub-text">내각리, 연평리</span>
              </td>
              <td>정수민</td>
              <td>21마 4453</td>
              <td>89건</td>
              <td>
                <div className="progress-bar">
                  <div className="progress-fill green" style={{ width: '100%' }}></div>
                </div>
              </td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 배송완료
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">구역 변경</button>
                  <button className="btn-action">상세 보기</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination-container">
          <span className="pagination-info">전체 12구역 중 1-5건 표시</span>
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn next">›</button>
          </div>
        </div>
      </div>

      <div className="footer-note">
        [대타 기사 배정] 클릭 시 가용 기사 목록 팝업이 열리며, 인근 구역 기사 중 여유 물량이 있는 기사를 우선 추천합니다.
      </div>
    </div>
  );
}
