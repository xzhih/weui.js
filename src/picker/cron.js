/* eslint-disable no-bitwise */
/* eslint-disable no-continue */
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

const regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g
const constraints = [[1, 31], [1, 12], [0, 6]]

/**
 * Schedule
 */
class Schedule {
  constructor(fields, start, end) {
    /**
         * dayOfMonth
         * @type {Array}
         */
    this.nDates = fields[0]

    /**
         * month
         * @type {Array}
         */
    this.nMonths = fields[1]

    /**
         * dayOfWeek
         * @type {Array}
         */
    this.nDays = fields[2]

    /**
         * start
         * @type {Date}
         */
    this.nStart = start

    /**
         * end
         * @type {Date}
         */
    this.nEnd = end

    /**
         * cursor
         * @type {Date}
         * @private
         */
    this.nPointer = start
  }

  nFindNext() {
    let next
    for (;;) {
      if (this.nEnd.getTime() - this.nPointer.getTime() < 0) {
        throw new Error(`out of range, end is ${this.nEnd}, current is ${this.nPointer}`)
      }

      const month = this.nPointer.getMonth()
      const date = this.nPointer.getDate()
      const day = this.nPointer.getDay()

      if (this.nMonths.indexOf(month + 1) === -1) {
        this.nPointer.setMonth(month + 1)
        this.nPointer.setDate(1)
        continue
      }

      if (this.nDates.indexOf(date) === -1) {
        this.nPointer.setDate(date + 1)
        continue
      }

      if (this.nDays.indexOf(day) === -1) {
        this.nPointer.setDate(date + 1)
        continue
      }

      next = new Date(this.nPointer)

      break
    }
    return next
  }

  /**
     * fetch next data
     */
  next() {
    const value = this.nFindNext()
    // move next date
    this.nPointer.setDate(this.nPointer.getDate() + 1)
    return {
      value,
      done: !this.hasNext()
    }
  }

  /**
     * has next
     * @returns {boolean}
     */
  hasNext() {
    try {
      this.nFindNext()
      return true
    } catch (e) {
      return false
    }
  }
}

function parseField(field, constraints) {
  const low = constraints[0]
  const high = constraints[1]
  let result = []

  // * 号等于最低到最高
  field = field.replace(/\*/g, `${low}-${high}`)

  // 处理 1,2,5-9 这种情况
  const fields = field.split(',')
  for (let i = 0, len = fields.length; i < len; i++) {
    const f = fields[i]
    if (f.match(regex)) {
      f.replace(regex, (_$0, lower, upper, step) => {
        // ref to `cron-parser`
        step = parseInt(step) || 1
        // Positive integer higher than constraints[0]
        lower = Math.min(Math.max(low, ~~Math.abs(lower)), high)

        // Positive integer lower than constraints[1]
        upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower

        // Count from the lower barrier to the upper
        for (let pointer = lower; pointer <= upper; pointer += step) {
          result.push(pointer)
        }
      })
    }
  }
  return result
}

/**
 *
 * @param expr
 * @param start
 * @param end
 * @returns {*}
 */
function parse(expr, start, end) {
  const atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/)
  const fields = []
  atoms.forEach((atom, index) => {
    const constraint = constraints[index]
    fields.push(parseField(atom, constraint))
  })
  return new Schedule(fields, start, end)
}

export default {
  parse
}
