import { Marker, RequestStatus } from 'src/gql/types'

export const showNotificationBadge = ({ adminRequests }: Marker) =>
  adminRequests.some(({ status }) => status === RequestStatus.pending)
