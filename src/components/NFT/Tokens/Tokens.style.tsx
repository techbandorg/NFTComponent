import styled from 'styled-components'
import { colors } from '../../../theme/index'
import closeToken from '../../../assets/images/Nft-img/icon/closeToken.svg'
import {
  FlexDivBase_v_1,
  FlexDivBase_v_4,
  Base_FontSizeSpan_v_1,
  Base_FontSizeSpan_v_2,
  Base_Flex_LI_v_3
} from '../helpers'

interface Props {
  isClose: boolean
}
const CustomList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`

export const TokenTooltip = styled.ul`
  padding-left: 0;
  list-style: none;
  & > li:not(:last-child) {
    margin-bottom: 10px;
  }
`
export const Container = styled(FlexDivBase_v_4)`
  display: grid;
  justify-content: start;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(372px, 372px));
`

export const CardContainer = styled.div<Props>`
  width: 372px;
  /* height: 577px; */
  height: ${props => (props.isClose ? '520px' : '577px')};
  border-radius: 16px;
  border: 1px solid #2d2d2d;
  background: ${colors(false).bg13};
  padding: 20px;
  display: flex;
  margin-top: 22px;
  @media (max-width: 915px) {
    padding: 16px;
    width: 332px;
  }
`
export const SmollCardContainer = styled.div`
  width: 372px;
  border-radius: 16px;
  border: 1px solid #2d2d2d;
  background: ${colors(false).bg13};
  padding: 20px;
  display: flex;
  margin-top: 22px;
  @media (max-width: 915px) {
    padding: 16px;
    width: 332px;
  }
`
export const TokenImg = styled.div`
  width: 332px;
  height: 80px;
  overflow: hidden;
  background-position: 100%;
  background-repeat: no-repeat;
  border-radius: 8px;
  @media (max-width: 915px) {
    height: 40px;
    width: 300px;
  }
`
export const List = styled(CustomList)``

export const ListItem = styled(Base_Flex_LI_v_3)`
  height: 59px;
  margin-top: 10px;
  padding: 0 16px;
`
export const ListItemLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 65px;
  padding: 8px 16px;
`

export const TokenDiv = styled.div`
  display: flex;
`
export const TokenName = styled.span`
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.03em;
`
export const TokenStatus = styled(Base_FontSizeSpan_v_1)`
  color: ${colors(false).text10};
`
export const TokenClosetatus = styled(Base_FontSizeSpan_v_1)`
  color: ${colors(false).text8};
`

export const TokenAmountDiv = styled.div`
  display: flex;
`
export const TokenIcon = styled.span``

export const TokenMinCost = styled(Base_FontSizeSpan_v_2)`
  color: ${colors(false).text2};
`
export const TokenAmount = styled(Base_FontSizeSpan_v_2)`
  color: ${colors(false).text11};
`

export const ListItemContainer = styled.div`
  /* display: flex; */
`
export const ListItemIcon = styled.span`
  padding-right: 20px;
`

export const ListItemAmount = styled.span`
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.03em;
  color: ${colors(false).text1};
`
export const ListItemTitle = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: ${colors(false).text6};
`
export const ListItemHelpers = styled.span`
  position: absolute;
  top: 4px;
  padding-left: 10px;
`

export const BtnContainer = styled(FlexDivBase_v_1)`
  height: 100px;
  margin-top: 10px;
`
export const Lane = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors(false).bg10};
`
export const CloseToken = styled.div`
  width: 100%;
  height: 238px;
  background-image: url(${closeToken});
  background-repeat: no-repeat;
  background-position: center;
`
