export type JointFamily = '出头' | '闷榫' | '圆材'
export type JointDifficulty = '入门' | '进阶' | '高难'
export type JointName = '燕尾榫' | '格肩榫' | '粽角榫' | '抱肩榫'

export interface JointType {
  id: string
  name: JointName
  family: JointFamily
  difficulty: JointDifficulty
  strengthNote: string
  glueNeeded: boolean
  /** 停用标记。旧数据没有该字段，按在用处理 */
  deprecated?: boolean
  schemaRev?: number
}
