import { List, ChevronRight } from 'lucide-react';

export default function SupportInquiryHistory() {
  return (
    <div className="recent-inquiries">
      <div className="header">
        <h4><List size={18} color="#64748b" /> 내 문의 내역</h4>
      </div>
      <div className="inquiry-list">
        <div className="inquiry-item">
          <div className="item-info">
            <span className="badge completed">답변완료</span>
            <div className="details">
              <h5>배송 완료 후 물건 미수령 관련 문의드립니다</h5>
              <p>접수번호 INQ-2025-1283 • 2025.12.08</p>
            </div>
          </div>
          <button className="btn-view">답변 보기 <ChevronRight size={14} /></button>
        </div>
        <div className="inquiry-item">
          <div className="item-info">
            <span className="badge processing">처리중</span>
            <div className="details">
              <h5>반품 신청 후 수거 기사님 미방문 건</h5>
              <p>접수번호 INQ-2025-1271 • 2025.12.05</p>
            </div>
          </div>
          <button className="btn-view">상세 보기 <ChevronRight size={14} /></button>
        </div>
      </div>
    </div>
  );
}
