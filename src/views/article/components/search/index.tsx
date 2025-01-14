/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";

import { ContentInterWrap } from "@/components/common-wrap";

import "./index.scss";

interface IProps {
	handleSearchChange: (e: object) => void;
	handleSearch: () => void;
	PushStatusList: Array<{ label: string; value: number }>;
	ToppingStatusList: Array<{ label: string; value: number }>;
	OfficalStatusList: Array<{ label: string; value: number }>;
}

const Search: FC<IProps> = ({ handleSearchChange, handleSearch, PushStatusList, ToppingStatusList, OfficalStatusList }) => {
	return (
		<div className="article-search">
			{/* 搜索 */}
			<ContentInterWrap className="article-search__wrap">
				<div className="article-search__search">
					<div className="article-search__search-item">
						{/* 增加一个作者的查询条件 */}
						<Input
							allowClear
							placeholder="请输入作者名"
							style={{ width: 142 }}
							onChange={e => {
								handleSearchChange({ userName: e.target.value });
							}}
						/>
					</div>
					<div className="article-search__search-item">
						<Input
							allowClear
							placeholder="请输入标题"
							style={{ width: 142 }}
							onChange={e => handleSearchChange({ title: e.target.value })}
						/>
					</div>
					<div className="article-search__search-item">
						<Select
							// 可以清空
							allowClear
							// 默认值
							placeholder="选择状态"
							options={PushStatusList}
							style={{ width: 100 }}
							// 触发搜索
							onChange={value => handleSearchChange({ status: Number(value || -1) })}
						></Select>
					</div>
					<div className="article-search__search-item">
						<Select
							// 可以清空
							allowClear
							// 默认值
							placeholder="是否置顶"
							options={ToppingStatusList}
							style={{ width: 100 }}
							// 触发搜索
							onChange={value => handleSearchChange({ toppingStat: Number(value || -1) })}
						></Select>
					</div>
					<div className="article-search__search-item">
						<Select
							// 可以清空
							allowClear
							// 默认值
							placeholder="是否推荐"
							options={OfficalStatusList}
							style={{ width: 100 }}
							// 触发搜索
							onChange={value => handleSearchChange({ officalStat: Number(value || -1) })}
						></Select>
					</div>
					<div className="article-search__search-btn">
						<Button type="primary" icon={<SearchOutlined />} style={{ marginRight: "25px" }} onClick={handleSearch}>
							搜索
						</Button>
					</div>
				</div>
			</ContentInterWrap>
		</div>
	);
};
export default Search;
