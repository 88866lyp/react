import React from 'react';
class PictureSelect extends React.Component {
	constructor(props) {
		super();
		this.state = {
			value: props.value,
			pictures: props.pictures.map(item => {
				return { ...item, isSelect: false }
			})
		}
	}
	change(x) {
		this.setState({
			pictures: this.state.pictures.map(item => {
				if (x == item.id)
					item.isSelect = !item.isSelect
				return item
			})
		})
	}
	both() {
		this.setState({
			pictures: this.state.pictures.map(item => {
				item.isSelect = !item.isSelect
				return item
			})
		})
	}

	render() {
		let h1 = { height: "10px", width: "10px", background: "pink", position: "relative", top: "-130px" }
		let h2 = { height: "10px", width: "10px", background: "blue", position: "relative", top: "-130px" }
		let hh = { height: "10px", width: "10px", background: "pink" }
		let hk = { height: "10px", width: "10px", background: "blue" }
		let fol={float: "left"}
		return (
			<div>
				<div>已选中{this.state.pictures.filter(item => { return item.isSelect }).length}个图片
						<p style={this.state.pictures.filter(item => { return item.isSelect }).length ==
						this.state.pictures.length ? hk : hh} onClick={() => this.both()}></p>
				</div>
				<div className="picture">
					{this.state.pictures.map(item => {
						return (
							<div style={fol} key={item.id} onClick={change => {
								this.change(item.id,
									this.state.pictures.filter(item => { return item.isSelect }).length
								)
							}}>
								<img src={item.url} alt="" />
								<p style={item.isSelect ? h2 : h1}></p>
							</div>
						)
					})}
				</div></div>)
	}
}
export default PictureSelect;
