import SubPageLayout from '../../components/SubPageLayout';
import { sidebarData } from '../../data/sidebarData';

export default function SupportClaim() {
  return (
    <SubPageLayout 
      heroTitle="파손/분실 접수"
      breadcrumbs={[
        { label: '홈', path: '/' },
        { label: '고객센터' },
        { label: '파손/분실 접수' }
      ]}
      sidebarData={sidebarData.support}
    >
      <div style={{ padding: '60px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#64748b', fontSize: '20px' }}>파손/분실 접수 컨텐츠 영역입니다.</h2>
      </div>
    </SubPageLayout>
  )
}
