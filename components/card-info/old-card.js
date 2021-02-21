import { List, ListItem, Box, Text } from '@chakra-ui/react';
import HandDown from '../../assets/hand-down';

const OldCard = ({ title, body, listCard }) => {
	return (
		<Box
			borderRadius={['20px 20px 0px 0px ', '20px 0px 0px 20px']}
			width={['100%', '50%']}
			bg='gray.200'
			px={['1rem', '3rem']}
			py='3rem'>
			<Text
				as='h4'
				fontFamily='Montserrat'
				fontSize='24px'
				fontStyle='normal'
				fontWeight='700'
				lineHeight='29px'
				letterSpacing='0em'
				textAlign='start'>
				{title}
			</Text>
			<Text
				as='p'
				paddingTop='1rem'
				fontFamily='Montserrat'
				fontSize='18px'
				fontStyle='normal'
				fontWeight='400'
				lineHeight='26px'
				letterSpacing='0em'
				textAlign='start'>
				{body}
			</Text>
			<List paddingTop='2rem' spacing='2'>
				{Object.keys(listCard).map((item) => {
					return (
						<ListItem display='flex' alignItems='center'>
							<Box marginRight='0.5rem'>
								<HandDown />
							</Box>
							{listCard[item]}
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
};

export default OldCard;
